'use client'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import Link from 'next/link'
import styles from './Navigation.module.scss'

interface NavLink {
  label: string
  href: string
}

interface NavigationProps {
  navLinks: NavLink[]
}

export const Navigation = ({ navLinks }: NavigationProps) => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.list}>
        {navLinks?.map((link) => {
          const isActive = pathname === link.href

          return (
            <li key={link.href} className={styles.item}>
              <Link
                href={link.href}
                className={isActive ? cn(styles.link, styles.active) : styles.link}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
