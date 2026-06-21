import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

// ── ADD YOUR PHOTO ─────────────────────────────────────────────────────────
import profilePhoto from '../assets/swati-photo.png'
const PHOTO = profilePhoto
//const PHOTO = null

// ── Animated tagline — renders words one by one ────────────────────────────
function AnimatedTagline({ text, className }) {
  // Split into segments: normal text and <em>...</em> chunks
  const segments = []
  const emRegex = /<em>(.*?)<\/em>/g
  let last = 0
  let match

  while ((match = emRegex.exec(text)) !== null) {
    if (match.index > last) {
      segments.push({ type: 'text', content: text.slice(last, match.index) })
    }
    segments.push({ type: 'em', content: match[1] })
    last = match.index + match[0].length
  }
  if (last < text.length) {
    segments.push({ type: 'text', content: text.slice(last) })
  }

  // Flatten into words with type info
  const words = []
  segments.forEach(seg => {
    const parts = seg.content.split(' ').filter(Boolean)
    parts.forEach((word, i) => {
      words.push({ word, type: seg.type })
      if (i < parts.length - 1) words.push({ word: ' ', type: 'space' })
    })
    // Add space between segments
    words.push({ word: ' ', type: 'space' })
  })

  return (
    <p className={className}>
      {words.map((item, i) => {
        if (item.type === 'space') return <span key={i}> </span>
        const delay = 0.5 + i * 0.035
        const baseStyle = {
          display: 'inline-block',
          opacity: 0,
          animation: `fadeInUp 0.4s ${delay}s ease both`,
        }
        if (item.type === 'em') {
          return (
            <strong
              key={i}
              style={{
                ...baseStyle,
                background: 'linear-gradient(135deg, #aa3bff 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}
            >
              {item.word}
            </strong>
          )
        }
        return (
          <span key={i} style={baseStyle}>{item.word}</span>
        )
      })}
    </p>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.content}>
        {/* Photo */}
        <div className={styles.photoWrap}>
          {PHOTO ? (
            <img src={PHOTO} alt="Dr. Swati Garg" className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}><span>SG</span></div>
          )}
          <div className={styles.photoBadge}>Ph.D. · AI Engineer</div>
        </div>

        <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
        <h1 className={styles.name}>Dr. Swati Garg</h1>

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

        {/* Stats bar */}
        <div className={styles.stats}>
          <div className={styles.stat} data-color="purple">
            <span className={styles.statNum}>3+</span>
            <span className={styles.statLabel}>{t('hero.stat_years')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat} data-color="teal">
            <span className={styles.statNum}>150+</span>
            <span className={styles.statLabel}>{t('hero.stat_clients')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat} data-color="coral">
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>{t('hero.stat_research')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat} data-color="amber">
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>{t('hero.stat_papers')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
