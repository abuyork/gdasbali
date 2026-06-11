import { useLayoutEffect, useState, type ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { YouTubeBackground } from './YouTubeBackground'
import { useHero } from '@/lib/hero'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  image: string
  imageAlt?: string
  /** Optional YouTube ID for a full-bleed background video (replaces the image). */
  videoId?: string
  children?: ReactNode
  /** Hero height. */
  size?: 'full' | 'short'
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Full-bleed cinematic hero — image (or background video) with ink scrim and a
 * centered serif headline in white. Nav floats transparently above it.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  videoId,
  children,
  size = 'short',
}: PageHeroProps) {
  const { setHasHero } = useHero()
  // Let the Header know a dark hero is present so it can float transparently.
  // useLayoutEffect runs before paint, avoiding a one-frame solid-header flash.
  useLayoutEffect(() => {
    setHasHero(true)
    return () => setHasHero(false)
  }, [setHasHero])

  // Use the video as the background when one is provided (and motion is allowed).
  // Otherwise fall back to the still image (also the reduced-motion fallback).
  const [showVideo] = useState(() => Boolean(videoId) && !prefersReducedMotion())

  const height = size === 'full' ? 'min-h-[88vh]' : 'min-h-[56vh] md:min-h-[64vh]'

  return (
    <header
      className={`relative flex items-center justify-center overflow-hidden bg-jungle ${height}`}
    >
      {/* Background video (replaces the image). Dark base avoids any flash while it loads. */}
      {showVideo && videoId ? (
        <YouTubeBackground videoId={videoId} />
      ) : (
        <img
          src={image}
          alt={imageAlt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
      )}

      {/* Light warm scrim — Oura lets the photograph breathe */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/20 to-ink/25"
        aria-hidden="true"
      />
      {/* Left-aligned editorial headline (Oura layout) */}
      <div className="animate-fade-up relative z-10 mx-auto w-full max-w-[88rem] px-6 pt-24 pb-12 text-left text-white md:px-10">
        {eyebrow && <Eyebrow className="mb-5 text-white/80">{eyebrow}</Eyebrow>}
        <h1 className="font-display max-w-3xl text-h1 md:text-display leading-[1.02] text-balance text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-lead text-white/85 text-pretty">{subtitle}</p>
        )}
        {children && <div className="mt-10 flex gap-4">{children}</div>}
      </div>
    </header>
  )
}
