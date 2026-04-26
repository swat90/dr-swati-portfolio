import styles from './Experience.module.css'

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Wasimil',
    location: 'Kyoto, Japan · Remote',
    period: 'Nov 2024 – Dec 2025',
    type: 'Full-time',
    highlights: [
      'Sole AI Engineer in a B2B SaaS startup serving 150+ hotel clients across Japan.',
      'Built AI Kanko — a multi-module platform combining LLM analytics, RAG, and ML pipelines for customer segmentation and revenue optimization.',
      'Developed speech-to-text + multilingual translation system for staff notes, reducing manual workload by ~50%.',
      'Led RAG-based FAQ chatbot development, cutting front desk query handling time by ~50%.',
      'Delivered OCR pipelines (Google Vision + PaddleOCR) for passport/ID extraction, reducing check-in time by ~70%.',
      'Automated workflows via Make.com — review scraping, sentiment analysis, document generation — cutting manual effort by ~70%.',
    ],
    stack: ['GCP', 'RAG', 'LLMs', 'PaddleOCR', 'Make.com', 'FastAPI', 'Firestore'],
  },
  {
    role: 'Data Scientist',
    company: 'QBS Learning',
    location: 'Delhi, India · Remote',
    period: 'Aug 2024 – Nov 2024',
    type: 'Contract',
    highlights: [
      'Developed AI-powered textbooks for K–8 students for UAE clients.',
      'Used LLMs with prompt engineering to streamline lesson structures and ensure content originality.',
      'Achieved ~70% reduction in SME time needed to develop curriculum-aligned lessons.',
    ],
    stack: ['LLMs', 'Prompt Engineering', 'Python'],
  },
  {
    role: 'ML Engineer',
    company: 'Optimum.ai',
    location: 'Remote · Freelance',
    period: 'Apr 2024 – Aug 2024',
    type: 'Freelance',
    highlights: [
      'Collaborated with an international team of 25+ members, taking on leadership responsibilities.',
      'Taught a deep learning and AI crash course covering transformers, LSTM, and neural networks.',
      'Built FinThrive — an AI financial planner for GenZ using CrewAI + Mistral LLM in a multi-agent system.',
    ],
    stack: ['CrewAI', 'Mistral LLM', 'Streamlit', 'Python'],
    link: 'https://github.com/OptimumAI-Community/AI-Financial-Planner',
  },
  {
    role: 'ML Engineer',
    company: 'Omdena',
    location: 'Remote · Freelance',
    period: 'Sep 2023 – Jul 2024',
    type: 'Freelance',
    highlights: [
      'Contributed to 4 projects with teams of 100+ international members.',
      'Led computer vision work (SAM, FastSAM, YOLO) for the HOT Team mapping initiative — 88%+ accuracy for aerial imagery feature extraction.',
      'Built sentiment analysis + RAG pipeline (Mistral-7b) for global mental health well-being project, deployed on Hugging Face.',
    ],
    stack: ['YOLO', 'SAM', 'RAG', 'Mistral-7b', 'BERT', 'XGBoost'],
    link: 'https://huggingface.co/spaces/Omdena-Mental-Health-Team-2/PeacePal',
  },
  {
    role: 'Data Scientist Intern',
    company: 'Innodatatics / 360DigitMg',
    location: 'Remote',
    period: 'Aug 2023 – Jan 2024',
    type: 'Internship',
    highlights: [
      'Built YOLOv8 bird-tracking model with 30% accuracy improvement; deployed Flask app for real-time webcam tracking, saving 15+ hours/week.',
      'Evaluated 10 time series models for medical inventory forecasting — PROPHET achieved 91% accuracy.',
      'Created Power BI dashboards and Streamlit apps, enabling ≥30% reduction in bounce rate.',
    ],
    stack: ['YOLOv8', 'Flask', 'PROPHET', 'Streamlit', 'Power BI'],
  },
  {
    role: 'Postdoctoral Fellow',
    company: 'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period: 'Dec 2019 – Nov 2022',
    type: 'Research',
    highlights: [
      'Built a structured database from 10,000+ research papers (2,700+ entries).',
      'Applied statistical analysis and modeling to large-scale scientific datasets.',
      'Published 2 peer-reviewed papers during COVID while working independently.',
      'Initiated self-learning in ML to predict hyperparameters for neutron-rich nuclei.',
    ],
    stack: ['Statistical Modeling', 'Fortran', 'Python', 'LaTeX'],
    link: 'https://doi.org/10.1016/j.adt.2022.101546',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Experience</p>
        <h2 className={styles.heading}>Career Timeline</h2>

        <div className={styles.timeline}>
          {/* The center vertical line */}
          <div className={styles.line} />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right}`}
            >
              {/* Dot on the center line */}
              <div className={styles.dot}>
                <div className={styles.dotInner} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.meta}>{exp.location}</p>
                  </div>
                  <div className={styles.periodWrap}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div className={styles.footer}>
                  <div className={styles.stack}>
                    {exp.stack.map(s => (
                      <span key={s} className={styles.pill}>{s}</span>
                    ))}
                  </div>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
