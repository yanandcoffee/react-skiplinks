import { useState, useEffect } from 'react'
import { Link } from './interfaces'

export default function useSkipLinks() {
  const [skipLinks, setSkipLinks] = useState<Link[]>([])

  useEffect(() => {
    const skipLinkElements = document.querySelectorAll(
      '[data-skip-link]:not(pre):not(code)'
    )
    const links: Link[] = Array.from(
      skipLinkElements,
      (skipLink: HTMLElement) => ({
        title: skipLink.dataset.skipLink || '',
        id: skipLink.id
      })
    )

    setSkipLinks(links)
  }, [])

  return { skipLinks }
}
