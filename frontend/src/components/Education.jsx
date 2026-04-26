import styles from './Education.module.css'

const education = [
  {
    degree: 'Ph.D. in Nuclear Physics',
    institution: 'Indian Institute of Technology Roorkee',
    location: 'India',
    period: 'Jul 2013 – Oct 2019',
    thesis: '"Role of Isospin in Heavy and Neutron-Rich Nuclei"',
    points: [
      'Published 10+ research papers in international journals and conference proceedings.',
      'Recipient of MHRD Fellowship (2013–2018).',
      'Vice-President of Physics Association, IIT Roorkee (2014–2015).',
    ],
  },
  {
    degree: 'M.Sc. (H.S.) in Physics',
    institution: 'Panjab University',
    location: 'Chandigarh, India',
    period: 'Jul 2010 – Jun 2012',
    grade: '74.15%',
    points: [],
  },
]

const achievements = [
  'Grant from National Natural Science Foundation of China (Dec 2019 – Nov 2022)',
  'Cleared GATE 2013 with All India Rank 85',
  'MHRD Fellowship recipient (Jul 2013 – Jul 2018)',
  'Life member, Indian Physics Association',
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Education & Achievements</p>
        <h2 className={styles.heading}>Academic Background</h2>

        <div className={styles.grid}>
          <div>
            {education.map((edu, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.meta}>{edu.location}</p>
                  </div>
                  <span className={styles.period}>{edu.period}</span>
                </div>
                {edu.thesis && <p className={styles.thesis}>Thesis: {edu.thesis}</p>}
                {edu.grade && <p className={styles.grade}>Grade: {edu.grade}</p>}
                {edu.points.length > 0 && (
                  <ul className={styles.points}>
                    {edu.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={styles.achievementsBox}>
            <h3 className={styles.achHeading}>Achievements & Affiliations</h3>
            <ul className={styles.achList}>
              {achievements.map((a, i) => (
                <li key={i}>
                  <span className={styles.star}>★</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
