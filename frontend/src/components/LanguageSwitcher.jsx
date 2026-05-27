import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const LANGUAGES = [
  { code: 'fi', label: 'FI', full: 'Suomi' },
  { code: 'sv', label: 'SV', full: 'Svenska' },
  { code: 'en', label: 'EN', full: 'English' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language?.slice(0, 2) || 'fi'

  return (
    <div className={styles.switcher} aria-label="Select language">
      {LANGUAGES.map((lang, idx) => (
        <span key={lang.code} className={styles.item}>
          <button
            className={`${styles.btn} ${current === lang.code ? styles.active : ''}`}
            onClick={() => i18n.changeLanguage(lang.code)}
            title={lang.full}
            aria-current={current === lang.code ? 'true' : undefined}
          >
            {lang.label}
          </button>
          {idx < LANGUAGES.length - 1 && (
            <span className={styles.sep}>|</span>
          )}
        </span>
      ))}
    </div>
  )
}
