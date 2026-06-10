import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset scroll on route change; honour #hash anchors (SPA navigation). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Defer until the target page has rendered.
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
