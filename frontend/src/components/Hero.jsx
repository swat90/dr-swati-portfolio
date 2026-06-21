import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

// ── ADD YOUR PHOTO ─────────────────────────────────────────────────────────
import profilePhoto from '../assets/swati-photo.png'
const PHOTO = profilePhoto
//const PHOTO = null


// ── Animated tagline — words appear one by one ──────────────────────────────
function AnimatedTagline({ text, className }) {
  // Split on spaces but preserve <em> tags intact
  const parts = text.split(/(<em>.*?<\/em>|\s+)/).filter(Boolean)
  let delay = 0.5  // start after name appears

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) return <span key={i}> </span>
        const d = delay
        delay += 0.04
        if (part.startsWith('<em>')) {
          const inner = part.replace(/<\/?em>/g, '')
          return (
            <em
              key={i}
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #aa3bff 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                opacity: 0,
                animation: `typewriter 0.4s ${d}s ease both`,
              }}
            >
              {inner}
            </em>
          )
        }
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: 0,
              animation: `typewriter 0.35s ${d}s ease both`,
            }}
          >
            {part}
          </span>
        )
      })}
    </p>
  )
}

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

        {/* Typewriter tagline — words animate in one by one */}
        <AnimatedTagline
          text={t('hero.tagline')}
          className={styles.tagline}
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
