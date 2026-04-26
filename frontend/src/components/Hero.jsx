import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Ph.D. Physics · AI Engineer · Data Scientist</p>
        <h1 className={styles.name}>Dr. Swati Garg</h1>
        <p className={styles.tagline}>
          Building intelligent systems at the intersection of{' '}
          <em>science</em> and <em>machine learning</em>.
        </p>
        <div className={styles.location}>
          <span>📍 Oulu, Finland</span>
        </div>
        <div className={styles.cta}>
          <a href="#experience" className={styles.btnPrimary}>View Experience</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>
        <div className={styles.social}>
          <a href="http://www.linkedin.com/in/swati-garg-02513153" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://github.com/swat90" target="_blank" rel="noreferrer">GitHub</a>
          <span className={styles.dot}>·</span>
          <a href="https://scholar.google.com/citations?user=xgJjVMYAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>
      </div>
    </section>
  )
}
