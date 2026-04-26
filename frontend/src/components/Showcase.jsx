import { useState } from 'react'
import styles from './Showcase.module.css'
import bokunImg from "../assets/showcase/bokun-to-hubspot.png";
import kbImg from "../assets/showcase/KB_articles.png";
import sprintImg from "../assets/showcase/sprint_grooming.png";

import bokundashImg     from '../assets/showcase/bokun-dashboard.png'
import miyamaStatsImg   from '../assets/showcase/stats-dashboard.png'
import kanko1           from '../assets/showcase/ai-kanko-1.png'
import kanko2           from '../assets/showcase/ai-kanko-2.png'
import kanko3           from '../assets/showcase/ai-kanko-3.png'
import kanko4           from '../assets/showcase/ai-kanko-4.png'
import faq1             from '../assets/showcase/faq-chat-1.png'
import faq2             from '../assets/showcase/faq-chat-2.png'
import faq3             from '../assets/showcase/faq-chat-3.png'
import faq4             from '../assets/showcase/faq-chat-4.png'

// ─── HOW TO ADD YOUR SCREENSHOTS ──────────────────────────────────────────────
// 1. Put images in src/assets/showcase/  (e.g. bokun-dashboard.png)
// 2. Import at the top:  import bokunImg from '../assets/showcase/bokun-dashboard.png'
// 3. On the matching item, change  image: null  →  image: bokunImg
// ─────────────────────────────────────────────────────────────────────────────

// Uncomment and update these imports once you add your images:
// import bokunImg   from '../assets/showcase/bokun-dashboard.png'
// import reservationImg from '../assets/showcase/reservation-automation.png'
// import kbImg      from '../assets/showcase/kb-automation.png'
// import sprintImg  from '../assets/showcase/sprint-automation.png'

const categories = ['All', 'Power BI', 'AI Systems', 'Make.com Automation']

const items = [
  // ── POWER BI DASHBOARDS ───────────────────────────────────────────────────
  {
    category: 'Power BI',
    title: 'Bokun Tour Booking Analytics Dashboard',
    description:
      'Interactive Power BI dashboard built for Miyama tourism operators. Visualises live Bokun reservation data — booking volumes, revenue by tour type, customer origin countries, seasonal demand patterns, and operator performance. Directly connected to the Make.com reservation automation pipeline (see automation section below), ensuring the dashboard always reflects real-time booking data.',
    impact: '10+ Miyama tour companies · Real-time Bokun data · Linked to automation pipeline',
    placeholder: { icon: '📊', color: '#2563eb', label: 'Add Bokun dashboard screenshot → src/assets/showcase/bokun-dashboard.png' },
    image: bokundashImg,        // → bokunImg
    images: null,
    tags: ['Power BI', 'Bokun API', 'Tourism Analytics', 'Real-time Data'],
    note: 'Government project owned by Wasimil.',
    videoUrl: null,
  },
  {
    category: 'Power BI',
    title: 'Miyama Town Customer Feedback Dashboard',
    description:
      'Multi-page Power BI dashboard commissioned by Miyama Town (local government) to track visitor satisfaction across the region. Shows aggregated customer feedback scores, sentiment trends by season, most-praised and most-complained-about experiences, and geographic breakdown of visitor origins. Used by the town office to improve local tourism infrastructure and services.',
    impact: 'Miyama Town government · Visitor satisfaction tracking · Seasonal trend analysis',
    placeholder: { icon: '🏘️', color: '#7c3aed', label: 'Add Miyama stats dashboard screenshot → src/assets/showcase/miyama-stats-dashboard.png' },
    image: miyamaStatsImg,        // → miyamaStatsImg
    images: null,
    tags: ['Power BI', 'Customer Feedback', 'Government Project', 'Sentiment Trends', 'Japan'],
    note: 'Government project owned by Wasimil.',
    videoUrl: null,
  },

    // ── AI SYSTEMS ────────────────────────────────────────────────────────────
  {
    category: 'AI Systems',
    title: 'AI Kanko — Hotel Intelligence Platform (4 Modules)',
    description:
      'Production AI platform built as sole AI Engineer at Wasimil, deployed on GCP Cloud Run, serving 150+ Japanese hotel clients. Includes full chat history, saved chart library, and four core modules:\n\n① Ask Data — Natural language interface to hotel data. Ask questions in plain text and get back structured analysis with text insights, interactive plots, and data tables.\n\n② Sentiment & Review Intelligence — Scrapes reviews via Make.com automation, stores in Firestore, and surfaces sentiment trends, topic breakdowns, and rating correlations inside the platform.\n\n③ Recommendation Engine — ML model trained monthly via GCP Cloud Scheduler. Answers business questions like "Which customers should I offer a breakfast add-on?" or "Which nationalities most frequently book the sauna add-on?" Predictions run daily as new bookings arrive.\n\n④ Customer Segmentation — Automated segmentation pipeline (same Cloud Scheduler architecture) grouping guests by behaviour, booking patterns, and preferences to support targeted marketing.',
    impact: '150+ hotel clients · 4 AI modules · GCP production · Daily automated inference',
    placeholder: { icon: '🤖', color: '#2563eb', label: 'Add 4 AI Kanko screenshots → kanko-1.png through kanko-4.png' },
    image: null,
    images: [kanko1, kanko2, kanko3, kanko4],       // → [kanko1, kanko2, kanko3, kanko4]
    tags: ['GCP Cloud Run', 'RAG', 'LLMs', 'Recommendation ML', 'Firestore', 'Cloud Scheduler', 'FastAPI', 'Python'],
    note: 'Production system at Wasimil (2024–2025). Video demo available — click below.',
    videoUrl: 'https://share.zight.com/p9u9DvWp#summary',
    videoLabel: '▶ Watch Full Demo on Zight',
    isVideo: true,
  },
  {
    category: 'AI Systems',
    title: 'FAQ Chatbot — RAG-Powered Hotel Assistant',
    description:
      'Multilingual RAG chatbot deployed for hotel front desks across Japan. Ingests hotel policy documents, room information, addon menus, and FAQs into a pgvector store. Staff and guests can ask natural language questions in English or Japanese and receive accurate, context-grounded answers — reducing front desk query handling time by ~50%.\n\nThe collage shows real chat interactions: handling room upgrade queries, local area recommendations, check-in policy questions, and Japanese-language responses.',
    impact: '~50% reduction in front desk queries · Multilingual',
    placeholder: { icon: '💬', color: '#059669', label: 'Add 4 chatbot screenshots → faq-chat-1.png through faq-chat-4.png' },
    image: null,
    images: [faq1, faq2, faq3, faq4],       // → [faq1, faq2, faq3, faq4]
    tags: ['RAG', 'pgvector', 'FastAPI', 'GCP Cloud Run', 'Multilingual' , 'Python'],
    note: 'Production system at Wasimil (2024–2025).',
    videoUrl: null,
  },
  {
    category: 'AI Systems',
    title: 'Speech-to-Text & Translation for Hotel Staff Notes',
    description:
      'Production system enabling hotel staff to record voice notes in any language. Built with OpenAI Whisper for transcription and GPT for Japanese translation and structured formatting. Notes are automatically categorised (guest preferences, complaints, special requests, maintenance) and synced to the PMS.\n\nDeployed on GCP Cloud Run using Docker containers — packaged with Dockerfile, requirements.txt, and the Whisper model file. This containerised approach ensures consistent performance across all hotel properties with zero manual setup per deployment.\n\nReduced manual note-writing by ~50% and eliminated translation errors between non-Japanese-speaking staff and management.',
    impact: '~50% manual effort saved · Dockerised Cloud Run · Multi-language → Japanese',
    placeholder: { icon: '🎙️', color: '#d97706', label: 'Screenshot from video demo — add here once captured' },
    image: null,
    images: null,
    tags: ['Whisper', 'OpenAI GPT', 'GCP Cloud Run', 'Docker', 'Speech-to-Text', 'Japanese NLP', 'Python'],
    note: 'Production system at Wasimil (2024). Video demo available — click below.',
    videoUrl: 'https://share.zight.com/8LuKdXqK#summary',
    videoLabel: '▶ Watch Demo on Zight',
    isVideo: true,
  },

  // ── MAKE.COM AUTOMATIONS ──────────────────────────────────────────────────
  {
    category: 'Make.com Automation',
    title: 'Reservation Pipeline: Bokun → Google Sheets → HubSpot',
    description:
      'Real-time automation pipeline for Miyama tour operators. Incoming Bokun reservation webhooks are processed instantly — bookings logged to Google Sheets and synced with HubSpot CRM. Intelligently detects new vs. existing customers, creates or updates CRM deals, and triggers email/LINE notifications. The Google Sheets output feeds directly into the Bokun Power BI dashboard above, completing the end-to-end data flow.',
    impact: '~90% manual effort saved · Real-time webhook processing · 10+ tour companies',
    placeholder: { icon: '⚙️', color: '#2563eb', label: 'Export Make.com canvas screenshot → reservation-automation.png' },
    image: bokunImg,        // → reservationImg
    images: null,
    tags: ['Make.com', 'Bokun Webhooks', 'HubSpot CRM', 'Google Sheets', 'LINE/EMAIL Notify'],
    note: 'Government project owned by Wasimil.',
    videoUrl: null,
  },
  {
    category: 'Make.com Automation',
    title: 'AI Knowledge Base Auto-Publishing',
    description:
      'Automated content pipeline converting ClickUp tasks and QA discussions into structured knowledge base articles. AI generates, formats, and publishes documentation directly to Notion, then sends Slack notifications for team review. Eliminated manual formatting and reduced documentation time from hours to minutes.',
    impact: '70% time saved · Fully automated · Reduced manual formatting',
    placeholder: { icon: '📝', color: '#7c3aed', label: 'Export Make.com canvas screenshot → kb-automation.png' },
    image: kbImg,        // → kbImg
    images: null,
    tags: ['Make.com', 'OpenAI', 'Notion API', 'Slack API', 'ClickUp'],
    note: null,
    videoUrl: null,
  },
  {
    category: 'Make.com Automation',
    title: 'Sprint Review & QA Validation Automation',
    description:
      'Intelligent sprint review automation triggered by ClickUp status changes. When a task enters review, AI evaluates completeness — goal clarity, success criteria, and test case coverage. Auto-updates task status (Pass/Fail) and posts actionable feedback directly in ClickUp chat before QA begins.',
    impact: '70% less communication overhead · 80% fewer regressions · Cleaner QA handoffs',
    placeholder: { icon: '✅', color: '#059669', label: 'Export Make.com canvas screenshot → sprint-automation.png' },
    image: sprintImg,        // → sprintImg
    images: null,
    tags: ['Make.com', 'AI Validation', 'ClickUp API', 'QA Automation'],
    note: null,
    videoUrl: null,
  },
]

// ── 2×2 collage ───────────────────────────────────────────────────────────────
function ImageCollage({ images, alt }) {
  return (
    <div className={styles.collage}>
      {images.slice(0, 4).map((src, i) => (
        <img key={i} src={src} alt={`${alt} ${i + 1}`} className={styles.collageImg} />
      ))}
    </div>
  )
}

// ── Zight video embed preview ─────────────────────────────────────────────────
function VideoPreview({ url, icon, color }) {
  return (
    <div className={styles.videoPreview} style={{ '--ph-color': color }}>
      <div className={styles.phGrid} />
      <div className={styles.videoPlayCircle}>
        <span className={styles.videoPlayIcon}>▶</span>
      </div>
      <span className={styles.videoPreviewLabel}>Video demo — click to watch on Zight</span>
    </div>
  )
}

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory)

  function renderCardMedia(item) {
    if (item.images && item.images.length > 0) {
      return <ImageCollage images={item.images} alt={item.title} />
    }
    if (item.image) {
      return <img src={item.image} alt={item.title} className={styles.image} />
    }
    // placeholder
    return (
      <div className={styles.placeholder} style={{ '--ph-color': item.placeholder.color }}>
        <div className={styles.phGrid} />
        {item.isVideo && (
          <div className={styles.videoPlayCircle}>
            <span className={styles.videoPlayIcon}>▶</span>
          </div>
        )}
        {!item.isVideo && <span className={styles.phIcon}>{item.placeholder.icon}</span>}
        <span className={styles.phLabel}>{item.placeholder.label}</span>
      </div>
    )
  }

  // Format description with line breaks for \n\n
  function formatDesc(text) {
    return text.split('\n\n').map((para, i) => (
      <p key={i} className={styles.lbPara}>{para}</p>
    ))
  }

  return (
    <section id="showcase" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Showcase</p>
        <h2 className={styles.heading}>Dashboards, AI Systems & Automations</h2>
        <p className={styles.sub}>
          Real work from production environments — two client dashboards, deployed AI systems with live video demos, and Make.com automation pipelines.
        </p>

        {/* Filter tabs */}
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div key={i} className={styles.card} onClick={() => setLightbox(item)}>
              <div className={item.images ? styles.imageWrapCollage : styles.imageWrap}>
                {renderCardMedia(item)}
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    {item.videoUrl && !item.images && !item.image ? '▶ Watch Demo' : 'View Details'}
                  </span>
                </div>
                <span className={styles.categoryChip}>{item.category}</span>
                {item.isVideo && (item.image || (item.images && item.images.length > 0)) && (
                  <span className={styles.videoPill}>▶ Video</span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.impact}>✦ {item.impact}</p>
                <div className={styles.tags}>
                  {item.tags.slice(0, 3).map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className={styles.tag}>+{item.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot guide */}
        <div className={styles.uploadCta}>
          <span>📸</span>
          <div>
            <p className={styles.uploadCtaTitle}>Adding your screenshots</p>
            <p className={styles.uploadCtaDesc}>
              Save to <code>src/assets/showcase/</code> → import at top of <code>Showcase.jsx</code> → replace <code>image: null</code> with your import. For the 2×2 collage cards (AI Kanko, FAQ chatbot), use <code>images: [img1, img2, img3, img4]</code>.
            </p>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className={styles.lightboxBackdrop} onClick={() => setLightbox(null)}>
          <div className={styles.lightbox} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>

            {/* Media area */}
            <div className={styles.lbImageWrap}>
              {lightbox.images && lightbox.images.length > 0 ? (
                <ImageCollage images={lightbox.images} alt={lightbox.title} />
              ) : lightbox.image ? (
                <img src={lightbox.image} alt={lightbox.title} className={styles.lbImage} />
              ) : lightbox.isVideo ? (
                <VideoPreview url={lightbox.videoUrl} color={lightbox.placeholder.color} />
              ) : (
                <div className={styles.lbPlaceholder} style={{ '--ph-color': lightbox.placeholder.color }}>
                  <span className={styles.lbIcon}>{lightbox.placeholder.icon}</span>
                  <p className={styles.lbPlaceholderText}>{lightbox.placeholder.label}</p>
                </div>
              )}
            </div>

            <div className={styles.lbBody}>
              <span className={styles.lbCategory}>{lightbox.category}</span>
              <h3 className={styles.lbTitle}>{lightbox.title}</h3>

              <div className={styles.lbDesc}>
                {formatDesc(lightbox.description)}
              </div>

              <p className={styles.lbImpact}>✦ {lightbox.impact}</p>

              {lightbox.note && (
                <p className={styles.lbNote}>ℹ {lightbox.note}</p>
              )}

              <div className={styles.lbTags}>
                {lightbox.tags.map(t => <span key={t} className={styles.lbTag}>{t}</span>)}
              </div>

              {lightbox.videoUrl && (
                <a
                  href={lightbox.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.videoBtn}
                  onClick={e => e.stopPropagation()}
                >
                  {lightbox.videoLabel || '▶ Watch Demo'}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}