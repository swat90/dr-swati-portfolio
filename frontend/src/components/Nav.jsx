import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Work',         href: '#work' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education',    href: '#education' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>Dr. Swati Garg</a>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.label} href={l.href} className={styles.mobileLink} onClick={close}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
