import { useEffect, useState } from 'react'

/**
 * DEMO-ONLY control (demo-switcher branch). Flips the whole site between the
 * three landing-page designs by setting `data-design` on <html>. The choice is
 * persisted to localStorage and restored before paint by an inline script in
 * index.html. Styled with fixed neutral colors so it looks the same on every
 * design rather than being re-skinned by the theme it controls.
 */
const DESIGNS = [
  { id: '1', label: 'Oura' },
  { id: '2', label: 'Ashton' },
  { id: '3', label: 'Evermade' },
] as const

export function DesignSwitcher() {
  const [active, setActive] = useState('2')

  useEffect(() => {
    const current =
      document.documentElement.getAttribute('data-design') ||
      localStorage.getItem('gdas-design') ||
      '2'
    setActive(current)
    document.documentElement.setAttribute('data-design', current)
  }, [])

  const choose = (id: string) => {
    setActive(id)
    document.documentElement.setAttribute('data-design', id)
    try {
      localStorage.setItem('gdas-design', id)
    } catch {
      /* ignore storage failures */
    }
  }

  return (
    <div
      role="group"
      aria-label="Design preview switcher"
      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
      className="fixed bottom-5 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-[#1b1b1f]/95 p-1 pl-3 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur"
    >
      <span className="mr-1 hidden text-[0.6875rem] uppercase tracking-[0.18em] text-white/55 sm:inline">
        Design
      </span>
      {DESIGNS.map((d) => (
        <button
          key={d.id}
          type="button"
          onClick={() => choose(d.id)}
          aria-pressed={active === d.id}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
            active === d.id
              ? 'bg-white text-[#1b1b1f]'
              : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <span className="opacity-50">{d.id}</span>&nbsp;{d.label}
        </button>
      ))}
    </div>
  )
}
