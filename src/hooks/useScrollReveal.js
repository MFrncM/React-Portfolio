// ============================================
// useScrollReveal.js
// Attaches IntersectionObserver to any element
// with class "reveal". Adds "visible" class when
// the element enters the viewport.
// ============================================

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Unobserve after first reveal — no need to keep watching
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
