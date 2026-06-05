import { useEffect, useRef, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

// Load the YouTube IFrame API once, shared across all callers.
let apiPromise: Promise<void> | null = null
function loadYouTubeApi(): Promise<void> {
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve) => {
    const w = window as any
    if (w.YT && w.YT.Player) {
      resolve()
      return
    }
    const prev = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script')
      tag.id = 'youtube-iframe-api'
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
    }
  })
  return apiPromise
}

/**
 * Full-bleed background video driven by the YouTube IFrame API.
 * - Muted autoplay + manual loop (no playlist → no prev/next buttons)
 * - controls hidden; iframe is non-interactive and slightly over-scaled so any
 *   residual player chrome is cropped out of view
 * - Re-mounts cleanly on SPA navigation (player is destroyed on unmount)
 */
export function YouTubeBackground({ videoId }: { videoId: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let player: any
    let cancelled = false

    loadYouTubeApi().then(() => {
      const w = window as any
      if (cancelled || !hostRef.current || !w.YT) return
      player = new w.YT.Player(hostRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute()
            e.target.playVideo()
            setReady(true)
          },
          onStateChange: (e: any) => {
            // Seamless loop without a playlist (0 === ENDED)
            if (e.data === 0) {
              e.target.seekTo(0)
              e.target.playVideo()
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      try {
        player?.destroy?.()
      } catch {
        /* player already gone */
      }
    }
  }, [videoId])

  return (
    <div
      className={`bg-video transition-opacity duration-1000 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <div ref={hostRef} />
    </div>
  )
}
