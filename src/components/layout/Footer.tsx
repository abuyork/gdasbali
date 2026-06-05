import { Link } from 'react-router-dom'
import { CONTACT, FOOTER_LINKS, SOCIAL, BRAND, TRUST_BADGES } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-jungle text-canvas">
      {/* Accreditation badges — white logos read correctly on the dark band */}
      <div className="border-b border-canvas/15">
        <ul className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 py-10 md:px-10">
          {TRUST_BADGES.map((badge) => {
            const content = badge.img.src ? (
              <img
                src={badge.img.src}
                alt={badge.img.alt}
                loading="lazy"
                className="h-12 w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            ) : (
              <span className="text-sm tracking-wide text-canvas/70 transition-colors hover:text-white">
                {badge.img.alt}
              </span>
            )
            return (
              <li key={badge.img.alt}>
                {badge.href ? (
                  <a href={badge.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-16 md:grid-cols-3 md:px-10 md:py-20">
        {/* Brand + contact */}
        <div>
          <p className="font-display text-h3 tracking-wide">{BRAND.name}</p>
          <p className="mt-2 text-sm text-canvas/70">{BRAND.tagline}</p>
          <address className="mt-6 space-y-2 not-italic text-sm text-canvas/85">
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              {CONTACT.address}
            </a>
            <a href={CONTACT.phoneHref} className="block hover:text-white">
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="block hover:text-white">
              {CONTACT.email}
            </a>
          </address>
        </div>

        {/* More information */}
        <nav aria-label="Footer">
          <p className="eyebrow text-canvas/60">More Information</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-canvas/85 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link to={link.to} className="text-canvas/85 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Social */}
        <div>
          <p className="eyebrow text-canvas/60">Follow</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canvas/85 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/15">
        <div className="mx-auto max-w-[88rem] px-6 py-6 text-xs text-canvas/60 md:px-10">
          Copyright © {year} {BRAND.name} · Holistic Wellness Resort in Ubud, Bali
        </div>
      </div>
    </footer>
  )
}
