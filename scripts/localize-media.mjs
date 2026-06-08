#!/usr/bin/env node
/**
 * Download all proxied resort media (/wp/*) into public/wp/ so the site serves
 * images from its own origin instead of proxying the WordPress host.
 *
 * Run locally (needs network):  node scripts/localize-media.mjs
 * Then commit public/wp/ and redeploy. Netlify serves the static files directly;
 * the /wp/* proxy rule in public/_redirects stays as a fallback for any misses.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { readdirSync, statSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const SRC = join(ROOT, 'src')
const OUT = join(ROOT, 'public', 'wp')
const UPSTREAM = 'https://gdasbali.com/wp-content/uploads'

// Collect every /wp/<path> reference in the source.
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

const refs = new Set()
for (const file of walk(SRC)) {
  if (!/\.(ts|tsx)$/.test(file)) continue
  const text = readFileSync(file, 'utf8')
  for (const m of text.matchAll(/\/wp\/[^"'`)\s]+/g)) refs.add(m[0])
}

console.log(`Found ${refs.size} unique media references.`)

let ok = 0
let fail = 0
for (const ref of refs) {
  const rel = ref.replace(/^\/wp\//, '') // e.g. 2023/02/foo.jpg
  const dest = join(OUT, rel)
  if (existsSync(dest)) {
    ok++
    continue
  }
  const url = `${UPSTREAM}/${rel}`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, buf)
    ok++
    console.log(`✓ ${rel} (${(buf.length / 1024).toFixed(0)} KB)`)
  } catch (err) {
    fail++
    console.warn(`✗ ${rel} — ${err.message}`)
  }
}

console.log(`\nDone. ${ok} saved/existing, ${fail} failed → public/wp/`)
if (fail) process.exitCode = 1
