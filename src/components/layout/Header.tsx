import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BRAND,
  BOOKING,
  ROOMS_LINKS,
  EXPERIENCES_FEATURED,
  EXPERIENCES_GROUPS,
  OFFERS_LINK,
} from '@/data/site'
import { useHero } from '@/lib/hero'
import type { FeaturedLink } from '@/data/types'

type MenuId = 'rooms' | 'experiences'

/** Minimal line icons for the featured cards (clay stroke). */
function FeaturedIcon({ icon }: { icon: FeaturedLink['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (icon === 'biohacking') {
    // pulse line — recovery / vital signs
    return (
      <svg {...common}>
        <path d="M2 12h4l2.5-6 4 12 2.5-6h7" />
      </svg>
    )
  }
  // leaf — spa / nature
  return (
    <svg {...common}>
      <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </svg>
  )
}

function ExternalMark() {
  return (
    <span aria-hidden="true" className="text-[0.8em] leading-none">
      ↗
    </span>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()
  const { hasHero } = useHero()

  // Transparent over the hero, solid once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on route change.
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname, location.hash])

  // Hover-intent helpers: open immediately, close after a short grace period
  // so the pointer can cross the gap between trigger and panel.
  const open = (menu: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  // Float transparently only over a dark hero, with all menus closed.
  const solid = scrolled || mobileOpen || !hasHero || openMenu !== null
  const bar = solid
    ? 'bg-canvas/95 text-ink border-line backdrop-blur supports-[backdrop-filter]:bg-canvas/80'
    : 'bg-transparent text-white border-transparent'

  const tabClass = 'nav-link inline-flex items-center gap-1.5 py-2 text-sm tracking-wide'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${bar}`}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpenMenu(null)
      }}
    >
      {/* `relative` so the full-width mega panel anchors to this container */}
      <div className="relative mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-3 md:px-10">
        {/* Logo links home — no "Home" text tab */}
        <Link to="/" className="flex items-center gap-3" aria-label="GDAS Bali — home">
          <img
            src={BRAND.logo.src}
            alt={BRAND.logo.alt}
            className={`h-10 w-auto md:h-12 ${solid ? 'brightness-0' : 'brightness-0 invert'}`}
            width={120}
            height={48}
          />
        </Link>

        {/* Desktop nav — Rooms · Experiences · Offers · Book now */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {/* ROOMS — short dropdown, strictly room types */}
          <div
            className="relative"
            onMouseEnter={() => open('rooms')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={tabClass}
              aria-expanded={openMenu === 'rooms'}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === 'rooms' ? null : 'rooms')}
              onFocus={() => open('rooms')}
            >
              Rooms
            </button>
            {openMenu === 'rooms' && (
              <div className="absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 border border-line bg-canvas text-ink shadow-[0_18px_40px_-24px_rgba(43,40,35,0.45)]">
                <ul className="py-2">
                  {ROOMS_LINKS.map((room) => (
                    <li key={room.to}>
                      <Link to={room.to} className="block px-5 py-2.5 text-sm hover:bg-surface">
                        {room.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* EXPERIENCES — mega-menu (featured cards + four category columns) */}
          <div onMouseEnter={() => open('experiences')} onMouseLeave={scheduleClose}>
            <button
              type="button"
              className={tabClass}
              aria-expanded={openMenu === 'experiences'}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === 'experiences' ? null : 'experiences')}
              onFocus={() => open('experiences')}
            >
              Experiences
            </button>
            {openMenu === 'experiences' && (
              <div className="absolute inset-x-0 top-full z-50 border border-line bg-canvas text-ink shadow-[0_28px_60px_-28px_rgba(43,40,35,0.5)]">
                <div className="mx-auto max-w-5xl px-8 py-8">
                  {/* A. Featured cards — best-selling wellness services */}
                  <div className="grid grid-cols-2 gap-4">
                    {EXPERIENCES_FEATURED.map((card) => {
                      const inner = (
                        <>
                          <span className="text-clay">
                            <FeaturedIcon icon={card.icon} />
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center gap-2">
                              <span className="font-display text-xl">{card.label}</span>
                              {card.external && <ExternalMark />}
                              <span className="eyebrow rounded-sm border border-clay px-1.5 py-0.5 text-[0.625rem]">
                                Featured
                              </span>
                            </span>
                            <span className="mt-1 block text-sm text-ink-soft">
                              {card.descriptor}
                            </span>
                          </span>
                        </>
                      )
                      const cardClass =
                        'flex items-start gap-4 border-2 border-clay/70 bg-surface p-5 transition-colors duration-200 hover:border-clay hover:bg-canvas'
                      return card.external ? (
                        <a
                          key={card.label}
                          href={card.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cardClass}
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link key={card.label} to={card.to} className={cardClass}>
                          {inner}
                        </Link>
                      )
                    })}
                  </div>

                  {/* B. Category columns */}
                  <div className="mt-8 grid grid-cols-4 gap-8">
                    {EXPERIENCES_GROUPS.map((group) => (
                      <div key={group.heading}>
                        <p className="eyebrow border-b border-line pb-2">{group.heading}</p>
                        <ul className="mt-3 space-y-2">
                          {group.links.map((link) => (
                            <li key={link.to}>
                              <Link
                                to={link.to}
                                className="text-sm text-ink-soft transition-colors hover:text-ink"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* OFFERS — highlighted conversion link, immediately left of Book now */}
          <Link
            to={OFFERS_LINK.to}
            className={`${tabClass} font-medium ${solid ? 'text-clay' : 'text-white'}`}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-1.5 w-1.5 rounded-full ${
                solid ? 'bg-clay' : 'bg-white'
              }`}
            />
            {OFFERS_LINK.label}
          </Link>

          {/* BOOK NOW — primary button, brightest element in the bar */}
          <a
            href={BOOKING.engine}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-clay py-2.5 px-5"
          >
            Book now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* Mobile menu — stacked accordion: rooms, featured first, then groups */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-canvas px-6 pb-8 pt-4 text-ink lg:hidden"
        >
          {/* Rooms */}
          <p className="eyebrow pb-2 text-[0.6875rem]">Rooms</p>
          {ROOMS_LINKS.map((room) => (
            <Link
              key={room.to}
              to={room.to}
              className="block border-b border-line/60 py-2.5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {room.label}
            </Link>
          ))}

          {/* Experiences — featured items first */}
          <p className="eyebrow pb-2 pt-6 text-[0.6875rem]">Experiences</p>
          {EXPERIENCES_FEATURED.map((card) =>
            card.external ? (
              <a
                key={card.label}
                href={card.to}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center gap-3 border-2 border-clay/70 bg-surface px-4 py-3"
              >
                <span className="text-clay">
                  <FeaturedIcon icon={card.icon} />
                </span>
                <span>
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    {card.label} <ExternalMark />
                  </span>
                  <span className="block text-xs text-ink-soft">{card.descriptor}</span>
                </span>
              </a>
            ) : (
              <Link
                key={card.label}
                to={card.to}
                className="mb-2 flex items-center gap-3 border-2 border-clay/70 bg-surface px-4 py-3"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-clay">
                  <FeaturedIcon icon={card.icon} />
                </span>
                <span>
                  <span className="block text-sm font-medium">{card.label}</span>
                  <span className="block text-xs text-ink-soft">{card.descriptor}</span>
                </span>
              </Link>
            ),
          )}

          {/* Collapsible category groups */}
          {EXPERIENCES_GROUPS.map((group) => (
            <details key={group.heading} className="group border-b border-line/60">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-sm [&::-webkit-details-marker]:hidden">
                {group.heading}
                <span
                  aria-hidden="true"
                  className="text-ink-soft transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <ul className="pb-3 pl-4">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block py-2 text-sm text-ink-soft"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {/* Offers + Book now */}
          <Link
            to={OFFERS_LINK.to}
            className="block py-3 text-sm font-medium text-clay"
            onClick={() => setMobileOpen(false)}
          >
            {OFFERS_LINK.label}
          </Link>
          <a
            href={BOOKING.engine}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-clay mt-3 w-full justify-center"
          >
            Book now
          </a>
        </nav>
      )}
    </header>
  )
}
