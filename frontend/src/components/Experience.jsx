import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Experience.module.css'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
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

// ── Experience data — updated from CV Apr 2026 ────────────────────────────────
const EXPERIENCES = [
  {
    role:     'AI Engineer',
    company:  'Wasimil',
    location: 'Kyoto, Japan · Remote',
    period:   'Nov 2024 – Jan 2026',
    type:     'industry',
    badge:    '🏢 Full-time',
    color:    '#2563eb',
    summary:  'Sole and first AI Engineer in a B2B SaaS startup. Built production AI systems for 150+ hotel clients across Japan — from architecture through deployment and monitoring.',
    bullets: [
      'Designed and deployed end-to-end AI systems on Google Cloud (Cloud Run, Vertex AI, Scheduler) including data pipelines, model development, API integration, and production inference workflows.',
      'Built AI Kanko — a multi-module platform combining LLM analytics, RAG, and ML pipelines for customer segmentation, recommendation, and revenue optimization.',
      'Developed speech-to-text + multilingual translation for Japanese staff notes — real-time transcription cutting manual workload by ~50%.',
      'Led development of a RAG-based FAQ chatbot giving staff natural language access to hotel policies, reducing front desk query handling by ~50%.',
      'Delivered OCR pipelines for passport/ID extraction using Google Vision — 90% accuracy, cutting guest check-in time by ~80%.',
      'Automated workflows via Make.com (review scraping, sentiment analysis, document generation, QA validation) — reducing manual effort by up to ~75%.',
    ],
    tags: ['GCP', 'LangChain', 'RAG', 'OCR', 'Make.com', 'LLM', 'PostgreSQL'],
  },
  {
    role:     'Data Scientist',
    company:  'QBS Learning',
    location: 'Delhi, India · Remote',
    period:   'Aug 2024 – Nov 2024',
    type:     'industry',
    badge:    '🏢 Contract',
    color:    '#7c3aed',
    summary:  'Built LLM-powered content pipeline for K–8 textbook development for UAE clients.',
    bullets: [
      'Designed a prompt-based workflow converting SME outlines into grade-appropriate lesson content and exercises, refined for originality before SME review.',
      'Reduced textbook authoring time by ~70%, significantly accelerating the content creation pipeline.',
    ],
    tags: ['LLM', 'Prompt Engineering', 'Content AI'],
  },
  {
    role:     'ML Engineer',
    company:  'Optimum.ai',
    location: 'Remote · Freelance',
    period:   'Apr 2024 – Aug 2024',
    type:     'freelance',
    badge:    '💼 Freelance',
    color:    '#059669',
    summary:  'Led a sub-team of 5, taught a deep learning crash course, and built a multi-agent financial planner.',
    bullets: [
      'Led a sub-team of 5 members and taught a deep learning & AI crash course covering transformers, LSTMs, neural networks, and practical applications.',
      'Built FinThrive — an AI financial planner for GenZ using CrewAI + Mistral LLM in a multi-agent system on Streamlit, covering expense tracking, forecasting, and debt repayment optimization.',
    ],
    tags: ['CrewAI', 'Mistral', 'Multi-Agent', 'Streamlit'],
    link: 'https://github.com/OptimumAI-Community/AI-Financial-Planner',
  },
  {
    role:     'ML Engineer',
    company:  'Omdena',
    location: 'Remote · Freelance',
    period:   'July 2023 – Apr 2024',
    type:     'freelance',
    badge:    '💼 Freelance',
    color:    '#d97706',
    summary:  'Delivered CV and NLP solutions across 4 projects with international teams of 20+ members.',
    bullets: [
      'Mapping Automation (HOT Team): Led SAM, FastSAM, YOLO Segmentation on aerial imagery for GIS map automation — 88%+ accuracy with YOLO Segmentation.',
      'Mental Health NLP: BERT + XGBoost sentiment classification; RAG with Mistral-7B over unstructured text. Deployed on Hugging Face.',
      'Alzheimer\'s Detection: CNN-based MRI classification achieving 99.2% accuracy via KerasTuner hyperparameter search on ADNI + Kaggle datasets.',
    ],
    tags: ['YOLO', 'SAM', 'BERT', 'RAG', 'CNN', 'GIS', 'HuggingFace'],
    links: [
      { label: 'HOT Mapping', url: 'https://dagshub.com/Omdena/HOTOSM' },
      { label: 'PeacePal', url: 'https://huggingface.co/spaces/SwatGarg/PeacePal' },
    ],
  },
  {
    role:     'Data Scientist Intern',
    company:  'INNODATATICS · 360DigitMg',
    location: 'Remote',
    period:   'Jan 2023 – June 2023',
    type:     'internship',
    badge:    '🎓 Internship',
    color:    '#0891b2',
    summary:  'Two end-to-end ML projects with Power BI dashboards and production deployments.',
    bullets: [
      'Bird Tracking CV: Annotated 300 images, built YOLOv8 tracking — 30% accuracy improvement. Flask app using live webcam cutting errors by 50%, saving 15+ hours/week.',
      'Medical Inventory Forecasting: Tested 10 time-series models — Prophet at 91% accuracy. Streamlit app reduced bounce rate by 30% and drove 20+ lacs INR revenue increase.',
    ],
    tags: ['YOLOv8', 'Flask', 'Prophet', 'Power BI', 'Streamlit'],
  },
  {
    role:     'Postdoctoral Fellow',
    company:  'Shanghai Jiao Tong University',
    location: 'Shanghai, China',
    period:   'Dec 2019 – Nov 2022',
    type:     'research',
    badge:    '🔬 Research',
    color:    '#64748b',
    summary:  'Published research while initiating ML self-study that led to the AI engineering transition.',
    bullets: [
      'Built a structured database from 10,000+ research papers — 2,700+ entries. Published 2 peer-reviewed papers during COVID, working independently in an international environment.',
      'Initiated self-learning in ML and data-driven methods to predict hyperparameters for neutron-rich nuclei — the pivot that led to AI engineering.',
    ],
    tags: ['Research', 'Data Analysis', 'ML Self-study', 'Python'],
    links: [
      { label: 'Paper 1', url: 'https://doi.org/10.1016/j.adt.2022.101546' },
      { label: 'Paper 2', url: 'https://doi.org/10.1140/epjst/e2020-000040-8' },
    ],
  },
]

export default function Experience() {
  const { t } = useTranslation()
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <p className={`${styles.label} ${inView ? styles.visible : ''}`}>
          {t('experience.label')}
        </p>
        <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}
            style={{ animationDelay: '0.1s' }}>
          {t('experience.heading')}
        </h2>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={exp.company + exp.period}
              exp={exp}
              index={i}
              globalVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index, globalVisible }) {
  const [expanded, setExpanded] = useState(index === 0)
  const { ref, inView } = useInView(0.1)
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.itemVisible : ''} ${isLeft ? styles.left : styles.right}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Connector dot */}
      <div className={styles.dot} style={{ background: exp.color }} />

      {/* Card */}
      <div
        className={styles.card}
        style={{
          borderTopColor: exp.color,
          background: `linear-gradient(135deg, ${exp.color}08 0%, #ffffff 60%)`,
        }}
        onClick={() => setExpanded(e => !e)}
      >
        {/* Header */}
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.badge}
                  style={{ background: `${exp.color}18`, color: exp.color }}>
              {exp.badge}
            </span>
            <span className={styles.period} style={{ color: exp.color, opacity: 0.8 }}>{exp.period}</span>
          </div>
          <h3 className={styles.role} style={{ color: exp.color }}>{exp.role}</h3>
          <div className={styles.companyRow}>
            <span className={styles.company}>{exp.company}</span>
            <span className={styles.location}>· {exp.location}</span>
          </div>
          <p className={styles.summary}>{exp.summary}</p>
          <div className={styles.tags}>
            {exp.tags.map(tag => (
              <span key={tag} className={styles.tag}
                    style={{ background: `${exp.color}12`, color: exp.color }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Expandable bullets */}
        {expanded && (
          <div className={styles.bullets}>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {/* Links */}
            {(exp.link || exp.links) && (
              <div className={styles.links}>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer"
                     onClick={e => e.stopPropagation()}>
                    View Project ↗
                  </a>
                )}
                {exp.links?.map(l => (
                  <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                     onClick={e => e.stopPropagation()}>
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Expand toggle */}
        <button
          className={styles.toggle}
          onClick={e => { e.stopPropagation(); setExpanded(v => !v) }}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          {expanded ? '▲ Less' : '▼ More'}
        </button>
      </div>
    </div>
  )
}
