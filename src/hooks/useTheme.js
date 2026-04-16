// ============================================
// useTheme.js
// Manages dark/light theme toggle.
// Persists to localStorage, respects OS preference
// on first visit.
// ============================================

import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme')
    if (stored) return stored

    // Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
