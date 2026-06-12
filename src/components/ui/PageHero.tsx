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

      {/* Dramatic maroon-tinted scrim (ink = wine maroon in this design) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/65"
        aria-hidden="true"
      />
      {/* Centered statement headline (Evermade layout) */}
      <div className="animate-fade-up relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-12 text-center text-white">
        {eyebrow && <Eyebrow className="mb-5 text-white/85">{eyebrow}</Eyebrow>}
        <h1 className="font-display text-h1 md:text-display leading-[1.05] text-balance text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lead text-white/85 text-pretty">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 flex justify-center gap-4">{children}</div>}
      </div>
    </header>
  )
}
