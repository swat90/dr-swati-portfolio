import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './About.module.css'

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, startOnVisible = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnVisible) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started, startOnVisible])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref  = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ── "What I bring" cards data ─────────────────────────────────────────────────
const VALUE_CARDS = [
  {
    icon: '🔬',
    title: 'First-Principles Thinking',
    body: '10 years of physics research trained me to break complex problems down, form hypotheses, and validate rigorously — an edge most ML engineers don't have.',
  },
  {
    icon: '🚀',
    title: 'Ships to Production',
    body: 'Not just notebooks — I've owned full pipelines end-to-end at Wasimil: data ingestion, model training, Cloud Run deployment, and live monitoring for 150+ clients.',
  },
  {
    icon: '🧩',
    title: 'Breadth Across Domains',
    body: 'LLMs, RAG, OCR, speech-to-text, computer vision, recommendation systems, time-series forecasting — built and shipped across all of them.',
  },
]

export default function About() {
  const { t }                  = useTranslation()
  const { ref: sectionRef, inView: sectionVisible } = useInView(0.1)

  const { count: years,   ref: yearsRef   } = useCountUp(5)
  const { count: clients, ref: clientsRef } = useCountUp(150)
  const { count: papers,  ref: papersRef  } = useCountUp(10)

  return (
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        {/* Label */}
        <p className={`${styles.label} ${sectionVisible ? styles.fadeInUp : ''}`}>
          {t('about.label')}
        </p>

        {/* Heading with typewriter feel via CSS animation */}
        <h2 className={`${styles.heading} ${sectionVisible ? styles.fadeInUp : ''}`}
            style={{ animationDelay: '0.1s' }}>
          {t('about.heading').split('\n').map((line, i) => (
            <span key={i} className={styles.headingLine}>{line}</span>
          ))}
        </h2>

        {/* Main grid: text left, value cards right */}
        <div className={styles.mainGrid}>

          {/* Left — bio text */}
          <div className={`${styles.bioCol} ${sectionVisible ? styles.fadeInUp : ''}`}
               style={{ animationDelay: '0.2s' }}>
            <p className={styles.lead}>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>

            {/* Skill tags */}
            <div className={styles.tags}>
              {t('about.tags', { returnObjects: true }).map((tag, i) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${sectionVisible ? styles.tagVisible : ''}`}
                  style={{ animationDelay: `${0.35 + i * 0.06}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — value cards */}
          <div className={styles.cardsCol}>
            {VALUE_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`${styles.card} ${sectionVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${0.25 + i * 0.12}s` }}
              >
                <span className={styles.cardIcon}>{card.icon}</span>
                <div>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                  <p className={styles.cardBody}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated stats bar */}
        <div className={`${styles.stats} ${sectionVisible ? styles.fadeInUp : ''}`}
             style={{ animationDelay: '0.45s' }}>
          <div className={styles.stat} ref={yearsRef}>
            <span className={styles.statNum}>{years}+</span>
            <span className={styles.statLabel}>{t('hero.stat_years')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat} ref={clientsRef}>
            <span className={styles.statNum}>{clients}+</span>
            <span className={styles.statLabel}>{t('hero.stat_clients')}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat} ref={papersRef}>
            <span className={styles.statNum}>{papers}+</span>
            <span className={styles.statLabel}>{t('hero.stat_papers')}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
