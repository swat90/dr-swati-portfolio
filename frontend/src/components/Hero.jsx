import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

// ── ADD YOUR PHOTO ─────────────────────────────────────────────────────────
import profilePhoto from '../assets/swati-photo.png'
const PHOTO = profilePhoto
//const PHOTO = null

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />

      <div className={styles.content}>
        {/* Photo */}
        <div className={styles.photoWrap}>
          {PHOTO ? (
            <img src={PHOTO} alt="Dr. Swati Garg" className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}>
              <span>SG</span>
            </div>
          )}
          <div className={styles.photoBadge}>Ph.D. · AI Engineer</div>
        </div>

        <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
        <h1 className={styles.name}>Dr. Swati Garg</h1>

        {/* tagline uses dangerouslySetInnerHTML for the <em> tags */}
        <p
          className={styles.tagline}
          dangerouslySetInnerHTML={{ __html: t('hero.tagline') }}
        />

        <div className={styles.location}>
          <span>📍 {t('hero.location')}</span>
          <span className={styles.sep}>·</span>
          <span>{t('hero.open_to')}</span>
        </div>

        <div className={styles.cta}>
          <a href="#experience" className={styles.btnPrimary}>
            {t('hero.btn_experience')}
          </a>
          <a href="#work" className={styles.btnSecondary}>
            {t('hero.btn_work')}
          </a>
          <a href="#contact" className={styles.btnGhost}>
            {t('hero.btn_contact')}
          </a>
        </div>

        <div className={styles.social}>
          <a href="http://www.linkedin.com/in/swati-garg-02513153" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://github.com/swat90" target="_blank" rel="noreferrer">GitHub</a>
          <span className={styles.dot}>·</span>
          <a href="https://scholar.google.com/citations?user=xgJjVMYAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>

        {/* Stats bar — 4 stats showing industry + research background */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>3+</span>
            <span className={styles.statLabel}>{t('hero.stat_years')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>150+</span>
            <span className={styles.statLabel}>{t('hero.stat_clients')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>{t('hero.stat_research')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>{t('hero.stat_papers')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
