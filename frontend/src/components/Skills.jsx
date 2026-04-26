import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    skills: ['Feature Engineering', 'Model Training & Optimization', 'RAG', 'Multi-Agent Architecture', 'Prompt Engineering', 'Reinforcement Learning', 'Computer Vision', 'NLP'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XGBoost', 'BERT', 'YOLO', 'SAM/FastSAM', 'NeuralProphet', 'LightFM', 'OpenCV', 'PaddleOCR'],
  },
  {
    category: 'Programming',
    skills: ['Python (Advanced)', 'SQL (Intermediate)', 'Fortran (Intermediate)', 'JavaScript (Basic)', 'CSS (Basic)'],
  },
  {
    category: 'Cloud & Data',
    skills: ['Google Cloud Platform', 'Cloud Run', 'Vertex AI', 'Firestore', 'Cloud Storage', 'AWS (Basic)', 'PostgreSQL', 'pgvector'],
  },
  {
    category: 'Web & Automation',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'Make.com', 'Google Apps Script', 'API Integration'],
  },
  {
    category: 'Tools & BI',
    skills: ['Power BI', 'Git / GitHub', 'DagsHub', 'LaTeX', 'Notion', 'ClickUp', 'MS Office'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Skills</p>
        <h2 className={styles.heading}>Technical Expertise</h2>
        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.pills}>
                {group.skills.map(s => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.languages}>
          <span className={styles.langLabel}>Languages:</span>
          {['English', 'Hindi', 'Punjabi', 'Japanese (N4)'].map(l => (
            <span key={l} className={styles.langPill}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
