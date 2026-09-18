import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function HashNavigation() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    let id: string
    try {
      id = decodeURIComponent(hash.slice(1))
    } catch {
      return
    }

    let cancelled = false
    let frame = 0
    // The browser can resolve a fragment before React mounts its destination.
    // Wait for local fonts as well so the section's position has settled.
    void document.fonts.ready.then(() => {
      if (cancelled) return
      frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
          block: 'start',
        })
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}
