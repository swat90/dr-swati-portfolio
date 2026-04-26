import styles from './Projects.module.css'

const projects = [
  {
    title: 'Mental Health Well-being AI (PeacePal)',
    category: 'NLP · Sentiment · LLM',
    description:
      'An AI system to analyze global mental health discourse and FOMO on social media. Combined traditional ML sentiment models with a RAG-based LLM for nuanced emotional interpretation. Deployed as an interactive app on Hugging Face.',
    highlights: [
      'XGBoost and BERT models for multi-class sentiment classification',
      'RAG with Mistral-7b for context-aware emotional insights',
      'Interactive Hugging Face Spaces deployment',
      'Analyzed social media posts across multiple languages',
    ],
    stack: ['BERT', 'XGBoost', 'Mistral-7b', 'RAG', 'Hugging Face', 'Python'],
    github: 'https://github.com/swat90/ChatBot',
    demo: 'https://huggingface.co/spaces/SwatGarg/PeacePal',
    badge: 'Open Source · Omdena',
    badgeColor: 'purple',
    icon: '🧠',
  },
  {
    title: 'AI Financial Planner (FinThrive)',
    category: 'Multi-Agent · LLM',
    description:
      'A GenZ-focused personal finance advisor powered by a CrewAI multi-agent system with Mistral LLM. Provides personalized advice on expense tracking, debt repayment, and financial education — all through a conversational Streamlit interface.',
    highlights: [
      'Multi-agent architecture via CrewAI (planner, advisor, educator agents)',
      'ML models for expense forecasting and debt optimization',
      'Streamlit interface with conversational UX',
      'Trained on real-world financial patterns for GenZ',
    ],
    stack: ['CrewAI', 'Mistral LLM', 'Streamlit', 'Python', 'Scikit-learn'],
    github: 'https://github.com/OptimumAI-Community/AI-Financial-Planner',
    demo: null,
    badge: 'Open Source',
    badgeColor: 'orange',
    icon: '💸',
  },
  {
    title: 'Aerial Map Feature Extraction (HOT x Omdena)',
    category: 'Computer Vision · GIS',
    description:
      'Collaborated with the Humanitarian OpenStreetMap Team (HOT) to automate mapping updates using AI. Implemented YOLO Segmentation, SAM, and FastSAM for feature extraction from aerial/satellite imagery to support disaster response and urban planning.',
    highlights: [
      '88%+ accuracy with YOLO Segmentation on aerial imagery',
      'Compared SAM, FastSAM, and YOLO+SAM pipelines',
      'GIS data processing for large-scale map updates',
      'Used by teams in disaster response and urban planning',
    ],
    stack: ['YOLOv8', 'SAM', 'FastSAM', 'OpenCV', 'Python', 'GIS'],
    Dagshub: 'https://dagshub.com/Omdena/HOTOSM',
    demo: null,
    badge: 'Open Source · Omdena',
    badgeColor: 'purple',
    icon: '🛰️',
  },
  {
    title: 'Nuclear Isomer Atlas Database',
    category: 'Research · Data Engineering',
    description:
      'Built the second edition of the Atlas of Nuclear Isomers — a structured scientific database compiled from 10,000+ research papers with 2,750+ unique entries. Published in Atomic Data and Nuclear Data Tables (2023) and widely cited in nuclear physics.',
    highlights: [
      'Extracted and structured data from 10,000+ papers',
      '2,750 unique nuclear isomer entries with decay properties',
      'Applied early ML methods to predict nuclear hyperparameters',
      'Published in high-impact peer-reviewed journal (2023)',
    ],
    stack: ['Python', 'Statistical Modeling', 'Fortran', 'LaTeX', 'Data Curation'],
    github: null,
    demo: 'https://doi.org/10.1016/j.adt.2022.101546',
    badge: 'Published Research',
    badgeColor: 'blue',
    icon: '⚛️',
  },
]

const badgeClasses = {
  blue: styles.badgeBlue,
  green: styles.badgeGreen,
  purple: styles.badgePurple,
  orange: styles.badgeOrange,
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Projects</p>
        <h2 className={styles.heading}>Featured Work</h2>
        <p className={styles.sub}>
          From production AI systems to open-source research — a selection of projects across NLP, computer vision, and data engineering.
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={`${styles.badge} ${badgeClasses[p.badgeColor]}`}>
                  {p.badge}
                </span>
              </div>

              <p className={styles.category}>{p.category}</p>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <ul className={styles.highlights}>
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              <div className={styles.stack}>
                {p.stack.map(s => (
                  <span key={s} className={styles.pill}>{s}</span>
                ))}
              </div>

              <div className={styles.links}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnAccent}`}>
                    Live / Paper ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.githubCta}>
          <p>See all repositories and contributions</p>
          <a href="https://github.com/swat90" target="_blank" rel="noreferrer" className={styles.githubBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
