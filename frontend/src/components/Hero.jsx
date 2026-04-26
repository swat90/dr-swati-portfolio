import styles from './Hero.module.css'

// ── ADD YOUR PHOTO ────────────────────────────────────────────────────────────
// 1. Put your photo in src/assets/  (e.g. swati-photo.jpg)
// 2. Uncomment the import below:
import profilePhoto from '../assets/swati.png'
// 3. Change  PHOTO = null  to  PHOTO = profilePhoto
// ─────────────────────────────────────────────────────────────────────────────
const PHOTO = null // ← replace with your import once added

export default function Hero() {
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

        <p className={styles.eyebrow}>Data Scientist · AI Engineer · NLP Specialist</p>
        <h1 className={styles.name}>Dr. Swati Garg</h1>
        <p className={styles.tagline}>
          Building intelligent systems at the intersection of{' '}
          <em>science</em> and <em>machine learning</em> —
          from nuclear physics research to production AI for 150+ businesses.
        </p>
        <div className={styles.location}>
          <span>📍 Oulu, Finland</span>
          <span className={styles.sep}>·</span>
          <span>Open to remote &amp; relocation</span>
        </div>

        <div className={styles.cta}>
          <a href="#experience" className={styles.btnPrimary}>View Experience</a>
          <a href="#showcase" className={styles.btnSecondary}>See My Work</a>
          <a href="#contact" className={styles.btnGhost}>Get in Touch</a>
        </div>

        <div className={styles.social}>
          <a href="http://www.linkedin.com/in/swati-garg-02513153" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://github.com/swat90" target="_blank" rel="noreferrer">GitHub</a>
          <span className={styles.dot}>·</span>
          <a href="https://scholar.google.com/citations?user=xgJjVMYAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>

        {/* Quick stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Years in AI & Research</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>150+</span>
            <span className={styles.statLabel}>Business Clients Served</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>10+</span>
            <span className={styles.statLabel}>Published Papers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
