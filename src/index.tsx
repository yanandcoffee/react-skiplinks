import * as React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import useSkipLinks from './useSkipLinks'
import { Link } from './interfaces'

interface Props {
  className?: string
}

export const SkipLinks = ({ className }: Props) => {
  const { skipLinks } = useSkipLinks()

  if (!skipLinks.length) return null

  return (
    <nav className={classNames(styles.skipLinks, className)}>
      <ul>
        {skipLinks.map((link: Link) => (
          <li key={link.title}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
