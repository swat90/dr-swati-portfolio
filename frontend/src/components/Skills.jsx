import { useTranslation } from 'react-i18next'
import styles from './Skills.module.css'

// Each category gets its own color scheme
const CATEGORY_COLORS = [
  { bg: '#f5edff', border: '#aa3bff', title: '#7c22c4', pill: 'rgba(170,59,255,0.10)', pillText: '#6b21a8' },
  { bg: '#e6faf8', border: '#0d9488', title: '#0f766e', pill: 'rgba(13,148,136,0.10)', pillText: '#0f766e' },
  { bg: '#fff0f3', border: '#f43f5e', title: '#be123c', pill: 'rgba(244,63,94,0.10)',  pillText: '#be123c' },
  { bg: '#fff7ed', border: '#f59e0b', title: '#b45309', pill: 'rgba(245,158,11,0.10)', pillText: '#92400e' },
  { bg: '#eef2ff', border: '#6366f1', title: '#4338ca', pill: 'rgba(99,102,241,0.10)', pillText: '#3730a3' },
  { bg: '#f0fdf4', border: '#10b981', title: '#047857', pill: 'rgba(16,185,129,0.10)', pillText: '#065f46' },
]

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: '🧠',
    skills: ['Feature Engineering','Model Training & Optimization','RAG','Multi-Agent Architecture','Prompt Engineering','Reinforcement Learning','Computer Vision','NLP'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '📦',
    skills: ['TensorFlow','PyTorch','Keras','Scikit-learn','XGBoost','BERT','YOLO','SAM/FastSAM','NeuralProphet','LightFM','OpenCV','PaddleOCR'],
  },
  {
    category: 'Programming',
    icon: '💻',
    skills: ['Python (Advanced)','SQL (Intermediate)','Fortran (Intermediate)','JavaScript (Basic)','CSS (Basic)'],
  },
  {
    category: 'Cloud & Data',
    icon: '☁️',
    skills: ['Google Cloud Platform','Cloud Run','Vertex AI','Firestore','Cloud Storage','AWS (Basic)','PostgreSQL','pgvector'],
  },
  {
    category: 'Web & Automation',
    icon: '⚙️',
    skills: ['FastAPI','Flask','Streamlit','Make.com','Google Apps Script','API Integration'],
  },
  {
    category: 'Tools & BI',
    icon: '📊',
    skills: ['Power BI','Git / GitHub','DagsHub','LaTeX','Notion','ClickUp','MS Office'],
  },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>{t('skills.label')}</p>
        <h2 className={styles.heading}>{t('skills.heading')}</h2>
        <div className={styles.grid}>
          {skillGroups.map((group, i) => {
            const c = CATEGORY_COLORS[i % CATEGORY_COLORS.length]
            return (
              <div
                key={group.category}
                className={styles.group}
                style={{
                  background: c.bg,
                  borderTop: `3px solid ${c.border}`,
                }}
              >
                <h3
                  className={styles.category}
                  style={{ color: c.title }}
                >
                  <span className={styles.categoryIcon}>{group.icon}</span>
                  {group.category}
                </h3>
                <div className={styles.pills}>
                  {group.skills.map(s => (
                    <span
                      key={s}
                      className={styles.pill}
                      style={{
                        background: c.pill,
                        color: c.pillText,
                        border: `1px solid ${c.border}30`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Languages row */}
        <div className={styles.languages}>
          <span className={styles.langLabel}>{t('skills.languages_label')}:</span>
          {['English 🇬🇧', 'Hindi 🇮🇳', 'Punjabi', 'Japanese N4 🇯🇵'].map(l => (
            <span key={l} className={styles.langPill}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
