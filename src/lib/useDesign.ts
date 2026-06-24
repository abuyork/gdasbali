import { useEffect, useState } from 'react'

/**
 * Reactive read of the active design (the `data-design` attribute on <html>,
 * set by the DesignSwitcher). Lets the landing page render a structurally
 * different layout per design, not just a re-skin.
 */
export function useDesign(): string {
  const [design, setDesign] = useState(
    () =>
      (typeof document !== 'undefined' &&
        document.documentElement.getAttribute('data-design')) ||
      '2',
  )

  useEffect(() => {
    const el = document.documentElement
    const read = () => setDesign(el.getAttribute('data-design') || '2')
    read()
    const observer = new MutationObserver(read)
    observer.observe(el, { attributes: true, attributeFilter: ['data-design'] })
    return () => observer.disconnect()
  }, [])

  return design
}
