import { useState } from 'react'
import styles from './Work.module.css'

// ─── ADD SCREENSHOTS ──────────────────────────────────────────────────────────
import bokunImg from "../assets/showcase/bokun-to-hubspot.png";
import kbImg from "../assets/showcase/KB_articles.png";
import sprintImg from "../assets/showcase/sprint_grooming.png";

import bokundashImg     from '../assets/showcase/bokun-dashboard.png'
import miyamaStatsImg   from '../assets/showcase/stats-dashboard.png'
import kanko1           from '../assets/showcase/ai-kanko-1.png'
import kanko2           from '../assets/showcase/ai-kanko-2.png'
import kanko3           from '../assets/showcase/ai-kanko-3.png'
import kanko4           from '../assets/showcase/ai-kanko-4.png'
import kanko5           from '../assets/showcase/ai-kanko-5.png'
import faq1             from '../assets/showcase/faq-chat-1.png'
import faq2             from '../assets/showcase/faq-chat-2.png'
import faq3             from '../assets/showcase/faq-chat-3.png'
import faq4             from '../assets/showcase/faq-chat-4.png'
// ─────────────────────────────────────────────────────────────────────────────

const TABS = [
  'All',
  'Production Systems',
  'Dashboards & Automation',
  'Open Source',
  'Coming Soon',
]

const items = [
  // ── PRODUCTION SYSTEMS ────────────────────────────────────────────────────
  {
    tab: 'Production Systems',
    icon: '🤖',
    badge: 'Production · GCP',
    badgeColor: 'blue',
    title: 'AI Kanko — Hotel Intelligence Platform',
    subtitle: '4-module AI system · 150+ hotel clients · Japan',
    description: 'Built as sole AI Engineer at Wasimil. Four fully integrated modules:\n\n① Ask Data — Natural language interface to hotel data. Ask questions in plain text, get structured analysis with text insights, interactive plots, and data tables.\n\n② Sentiment & Review Intelligence — Reviews scraped via Make.com, stored in Firestore, surfaced as sentiment trends and topic breakdowns inside the platform.\n\n③ Recommendation Engine — "Which customers should I offer a breakfast add-on?" or "Which nationalities book the sauna most?" ML model trained monthly via GCP Cloud Scheduler, predictions run daily as bookings arrive.\n\n④ Customer Segmentation — Automated segmentation pipeline grouping guests by behaviour and booking patterns for targeted marketing.\n\nIncludes full chat history and a saved chart library.',
    impact: '150+ clients · Daily automated inference · End-to-end MLOps',
    image: null,
    images: [kanko1, kanko2, kanko3, kanko4],       // → [kanko1, kanko2, kanko3, kanko4]
    tags: ['GCP Cloud Run', 'RAG', 'LLMs', 'Recommendation ML', 'Firestore', 'Cloud Scheduler', 'FastAPI'],
    note: 'Production system at Wasimil (2024–2025).',
    videoUrl: 'https://share.zight.com/p9u9DvWp#summary',
    videoLabel: '▶ Watch Demo on Zight',
    isVideo: true,
    placeholder: { icon: '🤖', color: '#2563eb', label: 'Add 4 AI Kanko screenshots' },
  },
  {
    tab: 'Production Systems',
    icon: '💬',
    badge: 'Production · RAG',
    badgeColor: 'green',
    title: 'Hotel FAQ Chatbot',
    subtitle: 'RAG · pgvector · English & Japanese',
    description: 'Multilingual RAG chatbot for hotel front desks. Ingests policy documents, room info, dining menus, and FAQs into a pgvector store. Staff and guests ask in English or Japanese and get accurate, grounded answers.\n\nThe collage shows real chat interactions: room upgrade queries, local area recommendations, check-in policy questions, and Japanese-language responses.',
    impact: '~50% reduction in front desk queries · Multilingual · pgvector retrieval',
    image: null,
    images: [faq1, faq2, faq3, faq4],       // → [faq1, faq2, faq3, faq4]
    tags: ['RAG', 'pgvector', 'FastAPI', 'GCP Cloud Run', 'LangChain', 'Japanese NLP'],
    note: 'Production system at Wasimil (2024–2025).',
    videoUrl: null,
    placeholder: { icon: '💬', color: '#059669', label: 'Add 4 chatbot screenshots' },
  },
  {
    tab: 'Production Systems',
    icon: '🎙️',
    badge: 'Production · Docker',
    badgeColor: 'orange',
    title: 'Speech-to-Text & Translation for Hotel Staff',
    subtitle: 'Whisper · OpenAI GPT · Dockerised Cloud Run',
    description: 'Staff record voice notes in any language. Whisper transcribes with high accuracy, GPT translates to Japanese and formats into structured categories (guest preferences, complaints, special requests, maintenance).\n\nDeployed on GCP Cloud Run via Docker — packaged with Dockerfile, requirements.txt, and Whisper model file. Zero manual setup per hotel property.\n\nReduces manual note-writing by ~50% and eliminates translation errors between non-Japanese-speaking staff and management.',
    impact: '~50% manual effort saved · Dockerised Cloud Run · Any language → Japanese',
    image: null,
    images: null,
    tags: ['Whisper', 'OpenAI GPT', 'GCP Cloud Run', 'Docker', 'FastAPI', 'Japanese NLP'],
    note: 'Production at Wasimil (2024). Video demo available.',
    videoUrl: 'https://share.zight.com/8LuKdXqK#summary',
    videoLabel: '▶ Watch Demo on Zight',
    isVideo: true,
    placeholder: { icon: '🎙️', color: '#d97706', label: 'Screenshot from video demo' },
  },

  // ── DASHBOARDS & AUTOMATION ───────────────────────────────────────────────
  {
    tab: 'Dashboards & Automation',
    icon: '📊',
    badge: 'Government Project',
    badgeColor: 'blue',
    title: 'Bokun Tour Booking Analytics Dashboard',
    subtitle: 'Power BI · Miyama, Japan · 10+ tour companies',
    description: 'Interactive Power BI dashboard for Miyama tourism operators. Visualises live Bokun reservation data — booking volumes, revenue by tour type, customer origin countries, seasonal demand, and operator performance. Directly connected to the Make.com reservation automation pipeline below, ensuring always-live data.',
    impact: '10+ Miyama tour companies · Real-time Bokun data · Government project',
    image: bokundashImg,        // → bokunImg
    images: null,
    tags: ['Power BI', 'Bokun API', 'Tourism Analytics', 'Real-time Data', 'Japan'],
    note: 'Government project owned by Wasimil. Shown with company permission. Data anonymised.',
    videoUrl: null,
    placeholder: { icon: '📊', color: '#2563eb', label: 'Add Bokun dashboard screenshot' },
  },
  {
    tab: 'Dashboards & Automation',
    icon: '🏘️',
    badge: 'Government Project',
    badgeColor: 'blue',
    title: 'Miyama Town Visitor Feedback Dashboard',
    subtitle: 'Power BI · Customer satisfaction · Local government',
    description: 'Multi-page Power BI dashboard for Miyama Town local government. Tracks visitor satisfaction across the region — feedback scores, sentiment trends by season, most-praised and most-complained experiences, and geographic breakdown of visitor origins. Used by the town office to improve local tourism services.',
    impact: 'Miyama Town government · Seasonal trend analysis · Policy decision support',
    image: miyamaStatsImg,        // → miyamaImg
    images: null,
    tags: ['Power BI', 'Customer Feedback', 'Sentiment Analysis', 'Government', 'Japan'],
    note: 'Government project owned by Wasimil. Shown with company permission. Data anonymised.',
    videoUrl: null,
    placeholder: { icon: '🏘️', color: '#7c3aed', label: 'Add Miyama stats dashboard screenshot' },
  },
  {
    tab: 'Dashboards & Automation',
    icon: '⚙️',
    badge: 'Make.com · Live',
    badgeColor: 'green',
    title: 'Reservation Pipeline: Bokun → Sheets → HubSpot',
    subtitle: 'Real-time webhooks · 10+ tour companies · LINE notifications',
    description: 'End-to-end automation for Miyama tour operators. Bokun reservation webhooks processed in real time — bookings logged to Google Sheets, synced to HubSpot CRM. Detects new vs. existing customers, creates or updates deals, and triggers email/LINE notifications. Output feeds directly into the Bokun Power BI dashboard above.',
    impact: '~90% manual effort saved · Real-time · 10+ tour operators',
    image: bokunImg,        // → reservImg
    images: null,
    tags: ['Make.com', 'Bokun Webhooks', 'HubSpot CRM', 'Google Sheets', 'LINE Notify'],
    note: 'Government project owned by Wasimil. Shown with company permission.',
    videoUrl: null,
    placeholder: { icon: '⚙️', color: '#2563eb', label: 'Export Make.com scenario screenshot' },
  },
  {
    tab: 'Dashboards & Automation',
    icon: '📝',
    badge: 'Make.com',
    badgeColor: 'purple',
    title: 'AI Knowledge Base Auto-Publishing',
    subtitle: 'ClickUp → OpenAI → Notion → Slack',
    description: 'Converts ClickUp tasks and QA discussions into structured knowledge base articles automatically. AI generates, formats, and publishes to Notion, then sends Slack notifications for team review. Eliminated manual formatting and reduced documentation time from hours to minutes.',
    impact: '90% time saved · Zero manual formatting · Improved team alignment',
    image: kbImg,        // → kbImg
    images: null,
    tags: ['Make.com', 'OpenAI', 'Notion API', 'Slack API', 'ClickUp'],
    note: null,
    videoUrl: null,
    placeholder: { icon: '📝', color: '#7c3aed', label: 'Export Make.com scenario screenshot' },
  },
  {
    tab: 'Dashboards & Automation',
    icon: '✅',
    badge: 'Make.com',
    badgeColor: 'green',
    title: 'Sprint Review & QA Validation Automation',
    subtitle: 'ClickUp status triggers · AI evaluation · Auto-feedback',
    description: 'Triggered by ClickUp status changes. When a task enters review, AI evaluates completeness — goal clarity, success criteria, test case coverage. Auto-updates task status (Pass/Fail) and posts actionable feedback in ClickUp chat before QA begins.',
    impact: '70% less communication overhead · 80% fewer regressions',
    image: sprintImg,        // → sprintImg
    images: null,
    tags: ['Make.com', 'AI Validation', 'ClickUp API', 'QA Automation'],
    note: null,
    videoUrl: null,
    placeholder: { icon: '✅', color: '#059669', label: 'Export Make.com scenario screenshot' },
  },

  // ── OPEN SOURCE ───────────────────────────────────────────────────────────
  {
    tab: 'Open Source',
    icon: '🧠',
    badge: 'Open Source · Omdena',
    badgeColor: 'purple',
    title: 'PeacePal — Mental Health Well-being AI',
    subtitle: 'BERT · Mistral-7b · RAG · Hugging Face',
    description: 'AI system analysing global mental health discourse and FOMO on social media. XGBoost and BERT for multi-class sentiment classification, RAG with Mistral-7b for nuanced emotional interpretation. Deployed as an interactive app on Hugging Face Spaces.',
    impact: 'Live on Hugging Face · Open source · Multi-language',
    image: null,
    images: null,
    tags: ['BERT', 'XGBoost', 'Mistral-7b', 'RAG', 'Hugging Face', 'NLP'],
    note: null,
    videoUrl: null,
    github: 'https://github.com/swat90/ChatBot',
    demo: 'https://huggingface.co/spaces/SwatGarg/PeacePal',
    placeholder: { icon: '🧠', color: '#7c3aed', label: '' },
  },
  {
    tab: 'Open Source',
    icon: '💸',
    badge: 'Open Source',
    badgeColor: 'orange',
    title: 'FinThrive — AI Financial Planner',
    subtitle: 'CrewAI · Mistral LLM · Multi-Agent · Streamlit',
    description: 'GenZ-focused personal finance advisor powered by CrewAI multi-agent system. Planner, advisor, and educator agents collaborate to provide personalised advice on expense tracking, debt repayment, and financial education through a conversational Streamlit interface.',
    impact: 'Open source · Multi-agent architecture · GenZ focused',
    image: null,
    images: null,
    tags: ['CrewAI', 'Mistral LLM', 'Streamlit', 'Multi-Agent', 'Python'],
    note: null,
    videoUrl: null,
    github: 'https://github.com/OptimumAI-Community/AI-Financial-Planner',
    demo: null,
    placeholder: { icon: '💸', color: '#d97706', label: '' },
  },
  {
    tab: 'Open Source',
    icon: '🛰️',
    badge: 'Open Source · Omdena',
    badgeColor: 'purple',
    title: 'Aerial Map Feature Extraction (HOT × Omdena)',
    subtitle: 'YOLOv8 · SAM · FastSAM · GIS · 88%+ accuracy',
    description: 'Collaborated with the Humanitarian OpenStreetMap Team to automate mapping updates using computer vision. Implemented and compared YOLO Segmentation, SAM, and FastSAM pipelines for feature extraction from aerial/satellite imagery. Used by teams in disaster response and urban planning.',
    impact: '88%+ accuracy · Disaster response use case · Open source',
    image: null,
    images: null,
    tags: ['YOLOv8', 'SAM', 'FastSAM', 'OpenCV', 'GIS', 'Python'],
    note: null,
    videoUrl: null,
    github: 'https://dagshub.com/Omdena/HOTOSM',
    demo: null,
    placeholder: { icon: '🛰️', color: '#2563eb', label: '' },
  },

  // ── COMING SOON ───────────────────────────────────────────────────────────
  {
    tab: 'Coming Soon',
    icon: '🍜',
    badge: 'In Progress',
    badgeColor: 'warm',
    title: 'Oulu Restaurant Sentiment Dashboard',
    subtitle: 'Apify · HuggingFace · Google Sheets · Streamlit · Live data',
    description: 'End-to-end NLP pipeline scraping Google reviews for local Oulu restaurants via Apify. Make.com orchestrates the flow — reviews sent to HuggingFace Inference API (nlptown/bert-base-multilingual) for sentiment scoring, results saved to Google Sheets, and visualised in a live interactive Streamlit dashboard.\n\nWill show: sentiment trends by restaurant, rating correlations, topic breakdown (food, service, atmosphere), and time-series analysis.',
    impact: 'Live Oulu data · Free-tier stack · Public dashboard',
    image: null,
    images: null,
    tags: ['Make.com', 'Apify', 'HuggingFace', 'Google Sheets', 'Streamlit', 'BERT', 'NLP'],
    note: 'Currently building — estimated completion 2–3 weeks.',
    videoUrl: null,
    comingSoon: true,
    placeholder: { icon: '🍜', color: '#2563eb', label: 'Coming soon' },
  },
  {
    tab: 'Coming Soon',
    icon: '🍽️',
    badge: 'In Progress',
    badgeColor: 'warm',
    title: 'Restaurant Booking Chatbot',
    subtitle: 'Agentic AI · Supabase · Intent detection · Reservation management',
    description: 'Agentic chatbot for restaurant table bookings. Users chat naturally — the bot understands intent (book table, check availability, modify reservation), reads and writes to a Supabase PostgreSQL database, and confirms bookings in conversation.\n\nTwo modes planned: a RAG mode letting users ask questions about the restaurant from its review data, and a booking mode where the agent handles the full reservation flow end-to-end.',
    impact: 'Full agentic flow · Supabase free tier · Portfolio demo',
    image: null,
    images: null,
    tags: ['LangChain', 'Supabase', 'PostgreSQL', 'Streamlit', 'RAG', 'Agentic AI'],
    note: 'Currently building — will be deployed on Streamlit Cloud.',
    videoUrl: null,
    comingSoon: true,
    placeholder: { icon: '🍽️', color: '#059669', label: 'Coming soon' },
  },
]

const badgeClasses = {
  blue: styles.badgeBlue,
  green: styles.badgeGreen,
  purple: styles.badgePurple,
  orange: styles.badgeOrange,
  warm: styles.badgeWarm,
}

function ImageCollage({ images, alt }) {
  return (
    <div className={styles.collage}>
      {images.slice(0, 4).map((src, i) => (
        <img key={i} src={src} alt={`${alt} ${i + 1}`} className={styles.collageImg} />
      ))}
    </div>
  )
}

function formatDesc(text) {
  return text.split('\n\n').map((para, i) => (
    <p key={i} className={styles.lbPara}>{para}</p>
  ))
}

export default function Work() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeTab === 'All' ? items : items.filter(i => i.tab === activeTab)

  function renderMedia(item, isLightbox = false) {
    const cls = isLightbox ? styles.lbImage : styles.image
    if (item.images && item.images.length > 0) return <ImageCollage images={item.images} alt={item.title} />
    if (item.image) return <img src={item.image} alt={item.title} className={cls} />
    // Video placeholder
    if (item.isVideo) {
      return (
        <div className={styles.videoPlaceholder} style={{ '--ph-color': item.placeholder.color }}>
          <div className={styles.phGrid} />
          <div className={styles.playCircle}><span className={styles.playIcon}>▶</span></div>
          <span className={styles.phLabel}>Click to view demo</span>
        </div>
      )
    }
    // Coming soon
    if (item.comingSoon) {
      return (
        <div className={styles.comingSoonPlaceholder} style={{ '--ph-color': item.placeholder.color }}>
          <div className={styles.phGrid} />
          <span className={styles.phIcon}>{item.placeholder.icon}</span>
          <span className={`${styles.phLabel} ${styles.buildingLabel}`}>🔨 Currently building</span>
        </div>
      )
    }
    // Standard placeholder
    return (
      <div className={styles.placeholder} style={{ '--ph-color': item.placeholder.color }}>
        <div className={styles.phGrid} />
        <span className={styles.phIcon}>{item.placeholder.icon}</span>
        {item.placeholder.label && <span className={styles.phLabel}>{item.placeholder.label}</span>}
      </div>
    )
  }

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Work</p>
        <h2 className={styles.heading}>Everything I've Built</h2>
        <p className={styles.sub}>
          Production AI systems, client dashboards, automation pipelines, open-source projects, and what's coming next.
        </p>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Coming Soon' ? '🔨 Coming Soon' : tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${item.comingSoon ? styles.cardComingSoon : ''}`}
              onClick={() => setLightbox(item)}
            >
              <div className={styles.imageWrap}>
                {renderMedia(item)}
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    {item.comingSoon ? 'See Details' : item.isVideo && !item.image && !item.images ? '▶ Watch Demo' : 'View Details'}
                  </span>
                </div>
                <span className={styles.tabChip}>{item.tab}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTopRow}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={`${styles.badge} ${badgeClasses[item.badgeColor]}`}>{item.badge}</span>
                </div>
                <p className={styles.cardSubtitle}>{item.subtitle}</p>
                <p className={styles.impact}>✦ {item.impact}</p>
                <div className={styles.tags}>
                  {item.tags.slice(0, 4).map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  {item.tags.length > 4 && <span className={styles.tag}>+{item.tags.length - 4}</span>}
                </div>
                {/* Inline links for open source */}
                {(item.github || item.demo) && (
                  <div className={styles.cardLinks} onClick={e => e.stopPropagation()}>
                    {item.github && <a href={item.github} target="_blank" rel="noreferrer" className={styles.cardLink}>GitHub ↗</a>}
                    {item.demo && <a href={item.demo} target="_blank" rel="noreferrer" className={styles.cardLink}>Live Demo ↗</a>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.backdrop} onClick={() => setLightbox(null)}>
          <div className={styles.lightbox} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>

            <div className={styles.lbMedia}>
              {renderMedia(lightbox, true)}
            </div>

            <div className={styles.lbBody}>
              <div className={styles.lbTopRow}>
                <span className={styles.lbTab}>{lightbox.tab}</span>
                <span className={`${styles.badge} ${badgeClasses[lightbox.badgeColor]}`}>{lightbox.badge}</span>
              </div>
              <h3 className={styles.lbTitle}>{lightbox.title}</h3>
              <p className={styles.lbSubtitle}>{lightbox.subtitle}</p>

              <div className={styles.lbDesc}>{formatDesc(lightbox.description)}</div>

              <p className={styles.lbImpact}>✦ {lightbox.impact}</p>

              {lightbox.note && <p className={styles.lbNote}>ℹ {lightbox.note}</p>}

              <div className={styles.lbTags}>
                {lightbox.tags.map(t => <span key={t} className={styles.lbTag}>{t}</span>)}
              </div>

              <div className={styles.lbActions}>
                {lightbox.videoUrl && (
                  <a href={lightbox.videoUrl} target="_blank" rel="noreferrer" className={styles.videoBtn} onClick={e => e.stopPropagation()}>
                    {lightbox.videoLabel || '▶ Watch Demo'}
                  </a>
                )}
                {lightbox.github && (
                  <a href={lightbox.github} target="_blank" rel="noreferrer" className={styles.outlineBtn} onClick={e => e.stopPropagation()}>GitHub ↗</a>
                )}
                {lightbox.demo && (
                  <a href={lightbox.demo} target="_blank" rel="noreferrer" className={styles.outlineBtn} onClick={e => e.stopPropagation()}>Live Demo ↗</a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
