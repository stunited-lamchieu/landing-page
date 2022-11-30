import { useState, useEffect } from 'react'

export const useScrollspy = (navigations, offset = 0) => {
  const [activeId, setActiveId] = useState('')

  const clamp = (value) => Math.max(0, value)

  const isBetween = (value, floor, ceil) => value >= floor && value <= ceil

  useEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset

      const position = navigations
        .map((navigation) => {
          const element = document.getElementById(navigation)

          if (!element) return { navigation, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = clamp(rect.top + scroll - offset)
          const bottom = clamp(rect.bottom + scroll - offset)

          return { navigation, top, bottom }
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom))

      setActiveId(position?.navigation || '')
    }

    listener()

    window.addEventListener('resize', listener)
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('resize', listener)
      window.removeEventListener('scroll', listener)
    }
  }, [navigations, offset])

  return activeId
}
