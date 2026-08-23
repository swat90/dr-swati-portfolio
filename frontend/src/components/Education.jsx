import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Education.module.css'

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

const EDUCATION = [
  {
    degree:      'Ph.D. in Nuclear Physics',
    institution: 'Indian Institute of Technology Roorkee',
    location:    'Roorkee, India',
    period:      'July 2013 – Oct 2019',
    color:       '#aa3bff',
    thesis:      'Role of Isospin in Heavy and Neutron-Rich Nuclei',
    highlights: [
      'Conducted large-scale theoretical research on nuclear structure using custom datasets and Fortran-based modeling',
      'Teaching Assistant 2014–2017 — led weekly lab and tutorial sessions for 60+ B.Tech and M.Sc. students across 3 courses',
      'Organized a 2-week International Nuclear Physics School at Amity University (2019) — full logistics for 20+ international participants: timetable, accommodation, catering, teaching support',
      'Vice-President, Physics Association, IIT Roorkee (2014–2015)',
      'Invited oral presentation, Dalian International Workshop, China (2020)',
      'ML for Nuclear Physics workshop, ECT* European Centre, Trieste, Italy (2021) — documented start of ML self-study',
      'Published 10+ peer-reviewed papers; 5 oral presentations at international conferences',
    ],
  },
  {
    degree:      'M.Sc. (H.S.) in Physics',
    institution: 'Panjab University',
    location:    'Chandigarh, India',
    period:      '2010 – 2012',
    color:       '#6366f1',
    highlights: [
      'First class honours — 74.15%',
    ],
  },
]

const ACHIEVEMENTS = [
  { icon: '🏆', text: 'GATE 2013 — All India Rank 85 (Graduate Aptitude Test in Engineering)' },
  { icon: '🎓', text: 'MHRD Fellowship recipient — Ministry of Human Resource Development, Govt. of India (2013–2018)' },
  { icon: '🌏', text: 'National Natural Science Foundation of China grant — Shanghai Jiao Tong University (2019–2022)' },
  { icon: '📚', text: 'Life Member, Indian Physics Association' },
  { icon: '🎖️', text: 'Merit holder — 8th, 10th and 12th grade, Punjab School Education Board' },
]

const COMMUNITY = [
  {
    icon: '👕',
    role: 'Merchandise Tent Volunteer',
    org:  'Africans in Oulu',
    location: 'Oulu, Finland',
    period: '2026',
    detail: '2-day community celebration — sold merchandise, helped set up the tent, and supported general on-site coordination',
    color: '#f97316',
  },
  {
    icon: '🌿',
    role: 'Event Coordination Volunteer',
    org:  'Vuolle Community',
    location: 'Oulu, Finland',
    period: '2026 – present',
    detail: 'Ongoing role supporting varied community events (e.g. Golden Root Fest, park dining, kids\' activity days, UNHOC family support program) — promotion, venue setup, guest welcoming, stall support, and clean-up, adapted to each event\'s needs',
    color: '#10b981',
  },
  {
    icon: '🎬',
    role: 'Film Club Volunteer (planning)',
    org:  'Villa Victor',
    location: 'Oulu, Finland',
    period: '2026 – present',
    detail: 'Helping plan a community film screening series to raise awareness about immigrants\' experiences and bring people together through films on shared human and natural themes',
    color: '#8b5cf6',
  },
  {
    icon: '🗺️',
    role: 'Kaupunkikaveri (City Friend)',
    org:  'Visit Oulu',
    location: 'Oulu, Finland',
    period: '2026 – present',
    detail: 'Guiding visitors around Oulu — spontaneous street meetups, scheduled meetup points, and personalized 1:1 matches based on visitor interests',
    color: '#0d9488',
  },
]

// Drop event photos in ../assets/community/ and list them here.
// Example: import photo1 from '../assets/community/africans-in-oulu-1.jpg'
import photo1 from '../assets/community/vuolle-goldenrootfest.png'
import photo2 from '../assets/community/africans-in-oulu-1.jpeg'
import photo3 from '../assets/community/vuolle.jpeg'
import photo4 from '../assets/community/vuolle-golden.jpeg'
import photo5 from '../assets/community/africans-in-oulu-2.jpeg'
import photo6 from '../assets/community/africans-in-oulu-3.jpeg'

const COMMUNITY_PHOTOS = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
]

export default function Education() {
  const { t } = useTranslation()
  const { ref, inView } = useInView(0.05)

  return (
    <section id="education" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <p className={`${styles.label} ${inView ? styles.visible : ''}`}>
          {t('education.label')}
        </p>
        <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}
            style={{ animationDelay: '0.1s' }}>
          {t('education.heading')}
        </h2>

        {/* Education cards */}
        <div className={styles.eduGrid}>
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              className={`${styles.eduCard} ${inView ? styles.cardVisible : ''}`}
              style={{
                animationDelay: `${0.15 + i * 0.1}s`,
                borderTop: `3px solid ${edu.color}`,
                background: `linear-gradient(135deg, ${edu.color}08 0%, #ffffff 60%)`,
              }}
            >
              <div className={styles.eduHeader}>
                <div>
                  <h3 className={styles.degree} style={{ color: edu.color }}>
                    {edu.degree}
                  </h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.eduMeta}>
                    <span>{edu.location}</span>
                    <span className={styles.dot}>·</span>
                    <span>{edu.period}</span>
                  </p>
                </div>
              </div>
              {edu.thesis && (
                <p className={styles.thesis}>
                  <strong>Thesis:</strong> "{edu.thesis}"
                </p>
              )}
              {edu.highlights && (
                <ul className={styles.highlights}>
                  {edu.highlights.map((h, j) => (
                    <li key={j} style={{ '--dot-color': edu.color }}>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className={`${styles.achievementsWrap} ${inView ? styles.cardVisible : ''}`}
             style={{ animationDelay: '0.35s' }}>
          <h3 className={styles.subheading}>{t('education.achievements_title')}</h3>
          <div className={styles.achievementsGrid}>
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className={styles.achievement}>
                <span className={styles.achieveIcon}>{a.icon}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Volunteering */}
        <div className={`${styles.communityWrap} ${inView ? styles.cardVisible : ''}`}
             style={{ animationDelay: '0.45s' }}>
          <h3 className={styles.subheading}>🤝 Community & Volunteering</h3>
          <p className={styles.communityNote}>
            Actively building roots in Oulu — relevant for Finnish employers
            looking for candidates committed to the region.
          </p>
          <div className={styles.communityGrid}>
            {COMMUNITY.map((c, i) => (
              <div
                key={i}
                className={styles.communityCard}
                style={{
                  borderLeft: `4px solid ${c.color}`,
                  background: `linear-gradient(135deg, ${c.color}0a 0%, #ffffff 70%)`,
                }}
              >
                <span className={styles.communityIcon}>{c.icon}</span>
                <div>
                  <p className={styles.communityRole}
                     style={{ color: c.color }}>
                    {c.role}
                  </p>
                  <p className={styles.communityOrg}>{c.org} · {c.location}</p>
                  <p className={styles.communityPeriod}>{c.period}</p>
                  <p className={styles.communityDetail}>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional photo strip — small thumbnails, kept subtle on purpose */}
          {COMMUNITY_PHOTOS.length > 0 && (
            <div className={styles.communityPhotos}>
              {COMMUNITY_PHOTOS.map((src, i) => (
                <img key={i} src={src} alt="" className={styles.communityPhoto} />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
