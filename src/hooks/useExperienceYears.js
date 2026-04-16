// ============================================
// useExperienceYears.js
// Dynamically calculates years of experience
// from a start date, formatted naturally.
// e.g. "almost 2", "2+", "2.5+"
// ============================================

import { useState, useEffect } from 'react'
import { SITE } from '../utils/constants'

export function useExperienceYears() {
  const [label, setLabel] = useState('')

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const start = SITE.careerStartDate

      // Total months elapsed
      const totalMonths =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth())

      const years = Math.floor(totalMonths / 12)
      const months = totalMonths % 12

      // Format into a human-readable label
      if (years === 0) {
        // Under 1 year
        setLabel(`${months}mo`)
      } else if (months < 2) {
        // e.g. "2 years" — right at the anniversary
        setLabel(`${years}+`)
      } else if (months <= 4) {
        // "almost 2 and a half"
        setLabel(`${years}+`)
      } else if (months <= 8) {
        // Halfway through the year
        setLabel(`${years}.5+`)
      } else {
        // Almost the next full year
        setLabel(`almost ${years + 1}`)
      }
    }

    calculate()

    // Recalculate once a day (in case someone leaves the tab open)
    const interval = setInterval(calculate, 1000 * 60 * 60 * 24)
    return () => clearInterval(interval)
  }, [])

  return label
}
