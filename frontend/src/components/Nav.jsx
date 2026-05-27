import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import styles from './Nav.module.css'

export default function Nav() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { key: 'about',        href: '#about' },
    { key: 'experience',   href: '#experience' },
    { key: 'skills',       href: '#skills' },
    { key: 'work',         href: '#work' },
    { key: 'publications', href: '#publications' },
    { key: 'education',    href: '#education' },
    { key: 'contact',      href: '#contact' },
  ]

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>Dr. Swati Garg</a>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.key}>
            <a href={l.href}>{t(`nav.${l.key}`)}</a>
          </li>
        ))}
      </ul>

      {/* Language switcher — desktop */}
      <div className={styles.langDesktop}>
        <LanguageSwitcher />
      </div>

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
          <div className={styles.mobileLang}>
            <LanguageSwitcher />
          </div>
          {links.map(l => (
            <a
              key={l.key}
              href={l.href}
              className={styles.mobileLink}
              onClick={close}
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
