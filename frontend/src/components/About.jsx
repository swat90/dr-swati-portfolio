import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>About</p>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>From Nuclear Physics<br />to AI Engineering</h2>
          </div>
          <div className={styles.right}>
            <p>
              Ph.D. in Physics with 3 years of postdoctoral research experience and 2+ years working
              as an AI Engineer in industry. I build and deploy machine learning solutions — NLP,
              LLM-based applications, and computer vision — with strong Python skills and a
              scientist's instinct for rigorous, data-driven thinking.
            </p>
            <p>
              I've developed cloud-based systems on Google Cloud, worked with real-world data across
              healthcare, hospitality, and education sectors, and thrive in cross-functional teams
              where complex problems need elegant solutions.
            </p>
            <div className={styles.tags}>
              {['NLP & LLMs', 'Computer Vision', 'RAG Systems', 'Cloud (GCP)', 'Statistical Modeling', 'Multi-Agent AI'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
