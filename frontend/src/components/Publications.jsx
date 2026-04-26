import { useState } from 'react'
import styles from './Publications.module.css'

const TABS = ['Featured', 'Journal Papers', 'Conference Proceedings']

const featured = [
  {
    title: 'Machine Learning Application in Atmospheric / Space Physics',
    authors: 'Swati Garg et al.',
    journal: 'Advances in Space Research',
    year: '2025',
    type: 'Journal · ML & Physics',
    description: 'Independent research applying machine learning to atmospheric/space physics — bridging the gap between traditional physics modelling and modern AI methods. Published in 2025, this paper demonstrates the cross-disciplinary application of ML techniques to complex physical systems.',
    doi: 'https://www.sciencedirect.com/science/article/abs/pii/S0273117725013547',
    highlight: 'Latest · ML × Physics · 2025',
    color: '#2563eb',
    note: 'Add full title and co-authors — update title field above.',
  },
  {
    title: 'Atlas of Nuclear Isomers — Second Edition',
    authors: 'Swati Garg, B. Maheshwari, B. Singh, Yang Sun, A. Goel, A. K. Jain',
    journal: 'Atomic Data and Nuclear Data Tables, Vol. 150, 101546',
    year: '2023',
    type: 'Journal · Database · Data Engineering',
    description: 'Compiled the most comprehensive database of nuclear isomers from 10,000+ research papers — 2,750+ structured entries with decay properties, energies, and spin-parity assignments. Widely cited reference in nuclear physics. Demonstrates large-scale data curation, statistical modelling, and scientific database engineering at scale.',
    doi: 'https://doi.org/10.1016/j.adt.2022.101546',
    highlight: 'Most cited · 2,750+ data entries',
    color: '#7c3aed',
    note: null,
  },
]

const journalPapers = [
  {
    authors: 'Swati Garg et al.',
    title: 'Machine Learning Application in Atmospheric / Space Physics',
    journal: 'Advances in Space Research',
    year: '2025',
    doi: 'https://www.sciencedirect.com/science/article/abs/pii/S0273117725013547',
    national: false,
  },
  {
    authors: 'Swati Garg, B. Maheshwari, B. Singh, Yang Sun, A. Goel, A. K. Jain',
    title: 'Atlas of Nuclear Isomers — Second Edition',
    journal: 'Atomic Data and Nuclear Data Tables 150, 101546',
    year: '2023',
    doi: 'https://doi.org/10.1016/j.adt.2022.101546',
    national: false,
  },
  {
    authors: 'A. Dey, D.C. Biswas, A. Chakraborty, S. Mukhopadhyay, Swati Garg, B. Maheshwari, A. K. Jain, W. Urban et al.',
    title: 'Measurement of relative isotopic yield distribution of even-even fission fragments from ²³⁵U (nₜₕ, f) following γ-ray spectroscopy',
    journal: 'Physical Review C, 103(4), 044322',
    year: '2021',
    doi: 'https://www.scopus.com/record/display.uri?eid=2-s2.0-85105524464',
    national: false,
  },
  {
    authors: 'Swati Garg, A. K. Jain, Y. Sun, A. Goel',
    title: 'Isospin conservation in compound nuclear fusion–fission reactions — empirical evidence',
    journal: 'Eur. Phys. J. Special Topics 229, 2527–2541',
    year: '2020',
    doi: null,
    national: false,
  },
  {
    authors: 'Swati Garg, B. Maheshwari, A. K. Jain',
    title: 'Role of isospin and its conservation in neutron-rich fission fragments',
    journal: 'Phys. Scr. 93, 124008',
    year: '2018',
    doi: null,
    national: false,
  },
  {
    authors: 'F. G. Kondev, E. A. McCutchan, B. Singh, Swati Garg, R. Shearman et al.',
    title: 'Nuclear Data Sheets for A=217',
    journal: 'Nuclear Data Sheets 147, 382',
    year: '2018',
    doi: null,
    national: false,
  },
  {
    authors: 'Swati Garg, A. K. Jain',
    title: 'Goodness of Isospin in Neutron Rich Systems from the Fission Fragment Distribution',
    journal: 'Phys. Scr. 92, 094001',
    year: '2017',
    doi: null,
    national: false,
  },
  {
    authors: 'A. K. Jain, B. Maheshwari, Swati Garg, M. Patial, B. Singh',
    title: 'Atlas of Nuclear Isomers',
    journal: 'Nuclear Data Sheets 128, 1',
    year: '2015',
    doi: null,
    national: false,
  },
  {
    authors: 'Sukhjeet Kaur, Swati Garg',
    title: 'Effect of Isospin Degree of Freedom on Transverse Momentum Spectra',
    journal: 'International Journal of Modern Physics E 22, 1350078',
    year: '2013',
    doi: null,
    national: false,
  },
  // National
  {
    authors: 'Swati Garg, A. K. Jain',
    title: 'Test of Isospin Conservation in Thermal Neutron-induced Fission of ²⁴⁵Cm',
    journal: 'Pramana – J. Phys. 92, 35',
    year: '2019',
    doi: null,
    national: true,
  },
  {
    authors: 'B. Maheshwari, Swati Garg, A. K. Jain',
    title: 'Rapid Communication: Δv = 2 seniority changing transitions in yrast 3⁻ states and B(E3) systematics of Sn isotopes',
    journal: 'Pramana – J. Phys. 89, 75',
    year: '2017',
    doi: null,
    national: true,
  },
]

const conferencePapers = [
  { authors: 'Swati Garg, A. K. Jain', title: 'Does Compound Nucleus remember its Isospin — An Evidence from Fission Widths', venue: 'EPJ Web of Conferences 178, 05008', year: '2018', intl: true },
  { authors: 'A. K. Jain, Swati Garg', title: 'Isospin Conservation in Neutron Rich Systems of Heavy Nuclei', venue: 'EPJ Web of Conferences 178, 05007', year: '2018', intl: true },
  { authors: 'Sukhjeet Kaur, Swati Garg', title: 'Isospin Effects on the Transverse Momentum Spectra of Protons and Neutrons', venue: 'Acta Physica Polonica B 45, 463', year: '2014', intl: true },
  { authors: 'S. Garg', title: 'Role of Isospin in Heavy and Neutron-rich Nuclei', venue: 'DAE Symposium on Nuclear Physics 63, 1238', year: '2018', intl: false },
  { authors: 'S. Garg, B. Maheshwari, D. Choudhury, A. K. Jain', title: 'Isospin Dependence in Fission Fragment Yields', venue: 'DAE Symposium on Nuclear Physics 64, 74', year: '2019', intl: false },
  { authors: 'S. Garg, A. K. Jain', title: 'Purity of Isospin and its importance in n-rich systems', venue: 'DAE Symposium on Nuclear Physics 61, 74', year: '2016', intl: false },
  { authors: 'S. Garg, B. Maheshwari, A. K. Jain', title: 'Role of Isospin in Neutron-Rich Fission Fragments', venue: 'DAE Symposium on Nuclear Physics 60, 170', year: '2015', intl: false },
  { authors: 'S. Garg, B. Maheshwari, R. Rajput, P. C. Srivastava, A. K. Jain', title: 'Comparison of the Weisskopf estimates in spin and K-isomers', venue: 'DAE Symposium on Nuclear Physics 59, 112', year: '2014', intl: false },
  { authors: 'Pragati, A.Y. Deo, S. Garg, B. Maheshwari, A. K. Jain et al.', title: 'In-beam spectroscopy of ²¹⁵Fr', venue: 'DAE Symposium on Nuclear Physics 62, 160', year: '2017', intl: false },
  { authors: 'Pragati, A.Y. Deo, S. Garg, B. Maheshwari et al.', title: 'High spin states in ²¹⁶Fr', venue: 'DAE Symposium on Nuclear Physics 61, 312', year: '2016', intl: false },
  { authors: 'Sukhjeet Kaur, Swati Garg', title: 'Role of isospin degree of freedom in transverse momentum spectra of nucleons', venue: 'DAE Symposium on Nuclear Physics 58, 324', year: '2013', intl: false },
  { authors: 'Sukhjeet Kaur, Swati Garg', title: 'Sensitivity of transverse momentum spectra of nucleons towards symmetry energy', venue: 'DAE Symposium on Nuclear Physics 58, 322', year: '2013', intl: false },
]

export default function Publications() {
  const [activeTab, setActiveTab] = useState('Featured')

  return (
    <section id="publications" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Publications</p>
        <h2 className={styles.heading}>Research & Academic Work</h2>
        <p className={styles.sub}>
          15+ peer-reviewed papers across nuclear physics, data science, and machine learning — from IIT Roorkee PhD research to independent AI/physics work published in 2025.
        </p>

        <div className={styles.schLink}>
          <a href="https://scholar.google.com/citations?user=xgJjVMYAAAAJ&hl=en" target="_blank" rel="noreferrer" className={styles.schBtn}>
            View Google Scholar Profile ↗
          </a>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button key={t} className={`${styles.tab} ${activeTab === t ? styles.tabActive : ''}`} onClick={() => setActiveTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {/* Featured */}
        {activeTab === 'Featured' && (
          <div className={styles.featuredGrid}>
            {featured.map((p, i) => (
              <div key={i} className={styles.featuredCard} style={{ '--card-color': p.color }}>
                <div className={styles.featuredTop}>
                  <span className={styles.featuredHighlight}>{p.highlight}</span>
                  <span className={styles.featuredYear}>{p.year}</span>
                </div>
                <p className={styles.featuredType}>{p.type}</p>
                <h3 className={styles.featuredTitle}>{p.title}</h3>
                <p className={styles.featuredAuthors}>{p.authors}</p>
                <p className={styles.featuredJournal}>{p.journal}</p>
                <p className={styles.featuredDesc}>{p.description}</p>
                {p.note && <p className={styles.featuredNote}>✎ {p.note}</p>}
                {p.doi && (
                  <a href={p.doi} target="_blank" rel="noreferrer" className={styles.doiBtn}>
                    View Paper ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Journal papers */}
        {activeTab === 'Journal Papers' && (
          <div>
            <p className={styles.groupLabel}>International Journals</p>
            <div className={styles.paperList}>
              {journalPapers.filter(p => !p.national).map((p, i) => (
                <div key={i} className={styles.paperRow}>
                  <div className={styles.paperMeta}>
                    <span className={styles.paperYear}>{p.year}</span>
                  </div>
                  <div className={styles.paperBody}>
                    <p className={styles.paperTitle}>{p.title}</p>
                    <p className={styles.paperAuthors}>{p.authors}</p>
                    <p className={styles.paperJournal}>{p.journal}</p>
                    {p.doi && <a href={p.doi} target="_blank" rel="noreferrer" className={styles.paperLink}>View ↗</a>}
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.groupLabel} style={{ marginTop: '2.5rem' }}>National Journals</p>
            <div className={styles.paperList}>
              {journalPapers.filter(p => p.national).map((p, i) => (
                <div key={i} className={styles.paperRow}>
                  <div className={styles.paperMeta}><span className={styles.paperYear}>{p.year}</span></div>
                  <div className={styles.paperBody}>
                    <p className={styles.paperTitle}>{p.title}</p>
                    <p className={styles.paperAuthors}>{p.authors}</p>
                    <p className={styles.paperJournal}>{p.journal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conference papers */}
        {activeTab === 'Conference Proceedings' && (
          <div>
            <p className={styles.groupLabel}>International Conferences</p>
            <div className={styles.paperList}>
              {conferencePapers.filter(p => p.intl).map((p, i) => (
                <div key={i} className={styles.paperRow}>
                  <div className={styles.paperMeta}><span className={styles.paperYear}>{p.year}</span></div>
                  <div className={styles.paperBody}>
                    <p className={styles.paperTitle}>{p.title}</p>
                    <p className={styles.paperAuthors}>{p.authors}</p>
                    <p className={styles.paperJournal}>{p.venue}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.groupLabel} style={{ marginTop: '2.5rem' }}>National Conferences (India)</p>
            <div className={styles.paperList}>
              {conferencePapers.filter(p => !p.intl).map((p, i) => (
                <div key={i} className={styles.paperRow}>
                  <div className={styles.paperMeta}><span className={styles.paperYear}>{p.year}</span></div>
                  <div className={styles.paperBody}>
                    <p className={styles.paperTitle}>{p.title}</p>
                    <p className={styles.paperAuthors}>{p.authors}</p>
                    <p className={styles.paperJournal}>{p.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
