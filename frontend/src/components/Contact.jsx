import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Contact</p>
        <h2 className={styles.heading}>Let's Connect</h2>
        <p className={styles.sub}>
          Open to AI/ML engineering roles, research collaborations, and consulting opportunities.
        </p>

        <div className={styles.links}>
          <a href="mailto:swatnucl.garg@gmail.com" className={styles.link}>
            <span className={styles.icon}>✉</span>
            <span>swatnucl.garg@gmail.com</span>
          </a>
          <a href="tel:+358413142779" className={styles.link}>
            <span className={styles.icon}>☎</span>
            <span>+358 413 142 779</span>
          </a>
          <a href="http://www.linkedin.com/in/swati-garg-02513153" target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon}>in</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/swat90" target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon}>gh</span>
            <span>GitHub</span>
          </a>
          <a href="https://scholar.google.com/citations?user=xgJjVMYAAAAJ&hl=en" target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.icon}>gs</span>
            <span>Google Scholar</span>
          </a>
        </div>

        <p className={styles.footer}>
          📍 Oulu, Finland &nbsp;·&nbsp; Available for remote & on-site opportunities
        </p>
      </div>
    </section>
  )
}
