import { useState } from 'react'
import styles from './Showcase.module.css'
import bokunImg from "../assets/showcase/bokun-to-hubspot.png";
import kbImg from "../assets/showcase/KB_articles.png";
import sprintImg from "../assets/showcase/sprint_grooming.png";

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

const categories = ['All', 'Power BI Dashboard', 'Make.com Automation']

const items = [
  // ── POWER BI DASHBOARDS ───────────────────────────────────────────────────
  {
    category: 'Power BI Dashboard',
    title: 'Bokun Tour Booking Analytics Dashboard',
    description:
      'Interactive Power BI dashboard built for Miyama tourism operators (government project via Wasimil). Visualises live Bokun reservation data — booking volumes, revenue trends, tour popularity, customer origin, and seasonal patterns. Enabled data-driven decisions for 10+ local tour companies in the Miyama region near Kyoto.',
    impact: 'Used by 10+ Miyama tour companies · Government project · Real Bokun data',
    placeholder: { icon: '📊', color: '#2563eb', label: 'Bokun Dashboard screenshot — add to src/assets/showcase/' },
    image: null, // → replace with: bokunImg
    tags: ['Power BI', 'Bokun API', 'Tourism Analytics', 'Government Project'],
    note: 'Client project (Wasimil / Miyama Town) — shown with permission, data anonymised.',
  },
  {
    category: 'Power BI Dashboard',
    title: 'Medical Inventory Forecasting Dashboard',
    description:
      'Power BI dashboard for a pharmacy client showing drug demand forecasting, stock levels, reorder alerts, and supplier performance. Built on a PROPHET time series model achieving 91% forecast accuracy. Streamlit app front-end connected to the same data pipeline.',
    impact: '91% forecast accuracy · ≥30% bounce rate reduction · ~20 lacs INR revenue impact',
    placeholder: { icon: '💊', color: '#d97706', label: 'Medical Inventory Dashboard — add to src/assets/showcase/' },
    image: null,
    tags: ['Power BI', 'PROPHET', 'Time Series', 'Healthcare'],
  },

  // ── MAKE.COM AUTOMATIONS ──────────────────────────────────────────────────
  {
    category: 'Make.com Automation',
    title: 'Reservation Pipeline: Bokun → Google Sheets → HubSpot',
    description:
      'End-to-end automation pipeline built for Miyama tour operators. Incoming Bokun reservation webhooks are processed in real time — new bookings are logged to Google Sheets and synced with HubSpot CRM. The system detects new vs. existing customers, creates or updates deals accordingly, and triggers email/LINE notifications for operational visibility.',
    impact: '~90% manual effort reduction · Real-time processing · 10+ tour companies',
    placeholder: { icon: '⚙️', color: '#2563eb', label: 'Make.com scenario screenshot — export from Make and add here' },
    image: bokunImg, // → replace with: reservationImg
    tags: ['Make.com', 'Bokun Webhooks', 'HubSpot API', 'Google Sheets', 'LINE Notify'],
    note: 'Client project (Wasimil / Miyama Town)',
  },
  {
    category: 'Make.com Automation',
    title: 'AI Knowledge Base Publishing Workflow',
    description:
      'Automated content pipeline that converts ClickUp tasks and internal QA discussions into structured knowledge base articles. AI generates, formats, and publishes documentation directly to Notion, then sends Slack notifications for team review. Eliminates manual formatting and back-and-forth communication entirely.',
    impact: '90% time saved · Fully automated · Improved team alignment',
    placeholder: { icon: '📝', color: '#7c3aed', label: 'Make.com KB scenario screenshot — add here' },
    image: kbImg, // → replace with: kbImg
    tags: ['Make.com', 'OpenAI', 'Notion API', 'Slack API', 'ClickUp'],
  },
  {
    category: 'Make.com Automation',
    title: 'Sprint Review & QA Validation Automation',
    description:
      'Intelligent sprint review automation triggered by ClickUp status changes. When a task enters review, AI evaluates its completeness — checking goal clarity, success criteria, and test case coverage. Based on evaluation, it auto-updates task status (Pass/Fail) and posts actionable feedback in ClickUp chat before QA execution begins.',
    impact: '70% less communication overhead · 80% fewer regressions · Cleaner QA handoffs',
    placeholder: { icon: '✅', color: '#059669', label: 'Make.com Sprint QA scenario screenshot — add here' },
    image: sprintImg, // → replace with: sprintImg
    tags: ['Make.com', 'AI Validation', 'ClickUp API', 'QA Automation'],
  },
]

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory)

  return (
    <section id="showcase" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Showcase</p>
        <h2 className={styles.heading}>Dashboards & Automations</h2>
        <p className={styles.sub}>
          Real client work — Power BI dashboards and Make.com automation pipelines built in production environments.
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
              <div className={styles.imageWrap}>
                {item.image ? (
                  <img src={item.image} alt={item.title} className={styles.image} />
                ) : (
                  <div className={styles.placeholder} style={{ '--ph-color': item.placeholder.color }}>
                    <span className={styles.phIcon}>{item.placeholder.icon}</span>
                    <span className={styles.phLabel}>{item.placeholder.label}</span>
                    <div className={styles.phGrid} />
                  </div>
                )}
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>View Details</span>
                </div>
                <span className={styles.categoryChip}>{item.category}</span>
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

        {/* How to add screenshots */}
        <div className={styles.uploadCta}>
          <span>📸</span>
          <div>
            <p className={styles.uploadCtaTitle}>Adding your screenshots</p>
            <p className={styles.uploadCtaDesc}>
              Save images to <code>src/assets/showcase/</code>, import them at the top of <code>Showcase.jsx</code>, then replace <code>image: null</code> with your import. The placeholder disappears automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightboxBackdrop} onClick={() => setLightbox(null)}>
          <div className={styles.lightbox} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>

            <div className={styles.lbImageWrap}>
              {lightbox.image ? (
                <img src={lightbox.image} alt={lightbox.title} className={styles.lbImage} />
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
              <p className={styles.lbDesc}>{lightbox.description}</p>
              <p className={styles.lbImpact}>✦ {lightbox.impact}</p>
              {lightbox.note && (
                <p className={styles.lbNote}>ℹ {lightbox.note}</p>
              )}
              <div className={styles.lbTags}>
                {lightbox.tags.map(t => <span key={t} className={styles.lbTag}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
