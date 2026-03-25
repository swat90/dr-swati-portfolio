import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('profile')

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="content-card">
            <h1 className="name-title">Dr. Swati</h1>
            <p className="role-subtitle">Data Scientist | AI Engineer | Ph.D. Nuclear Physics</p>
            <hr />
            <div className="info-grid">
              <div className="info-item"><strong>📧 Email:</strong> swatnucl.garg@gmail.com</div>
              <div className="info-item"><strong>📞 Phone:</strong> +358 413142779</div>
            </div>
            
            <section className="bio-section">
              <h3>Profile Summary</h3>
              <p>Ph.D. in Physics with over 3 years of postdoctoral research and 2+ years as an AI Engineer. Specialist in LLMs, Computer Vision, and GCP Cloud architecture.</p>
            </section>

            <section className="bio-section">
              <h3>Education</h3>
              <div className="edu-block">
                <strong>Ph.D. Nuclear Physics</strong> | IIT Roorkee <span className="year">2013 - 2018</span>
                <p>Thesis: Role of Isospin in Heavy and Neutron-Rich Nuclei</p>
              </div>
              <div className="edu-block">
                <strong>M.Sc. Physics</strong> | Panjab University <span className="year">2012 (74.2%)</span>
              </div>
              <div className="edu-block">
                <strong>B.Sc. Non-Medical</strong> | Panjab University <span className="year">2010 (84.3%)</span>
              </div>
            </section>
          </div>
        )

            case 'experience':
        return (
          <div className="content-card scroll-area">
            <h2 className="section-title">Professional Experience</h2>

            {/* WASIMIL */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>AI Engineer | Wasimil | Kyoto, Japan (Remote)</h4>
                <span className="date-tag">Nov 2024 – Dec 2025</span>
              </div>
              <p className="job-intro">Sole AI Engineer in a fast-paced agile hospitality tech team, building multilingual AI systems powering hotel operations across Japan. Collaborated with cross-functional teams and engaged directly with hotel clients to design intelligent, automated solutions.</p>
              <ul className="job-details">
                <li>Met regularly with hotel clients to gather requirements, demonstrate AI pipelines, and align product features with operational workflows.</li>
                <li>Architected and deployed end-to-end AI systems (ingestion, experimentation, evaluation, retraining) on <strong>GCP Cloud Run</strong> with Cloud Scheduler.</li>
                <li>Developed <strong>'AI Kanko'</strong> chatbots for hotel analytics (occupancy, ADR, forecasting), sentiment insights (Booking.com/Tripadvisor), and personalized guest recommendations.</li>
                <li><strong>Speech-to-Text & Voice:</strong>
                  <ul>
                    <li>Built a <strong>“Name-to-Voice”</strong> synthesis model for diverse guest nationalities.</li>
                    <li>Integrated offline <strong>Whisper-based STT</strong> for front desk tasks, translating native speech to Japanese automatically.</li>
                  </ul>
                </li>
                <li>Developed a multilingual FAQ chatbot, reducing response time by <strong>~50%</strong>.</li>
                <li>Designed <strong>OCR pipelines</strong> for passport/ID scanning (Google Vision & paddleOCR) with <strong>95% accuracy</strong>, reducing check-in time by <strong>70%</strong>.</li>
                <li>Built automated sentiment pipelines using Apify scrapers, Gemini/OpenAI, and <strong>Make.com</strong>, syncing insights to Firestore.</li>
                <li>Automated workflows via Make.com, saving <strong>90% manual effort</strong> in KB publishing and marketing.</li>
                <li>Developed ML models for recommendation and forecasting (LightFM, NeuralProphet, XGBoost, BERT) and staff–guest matching using embeddings.</li>
                <li>Managed agile cycles in <strong>ClickUp</strong> and documented all workflows in <strong>Notion</strong>.</li>
              </ul>
            </div>

            {/* QBS LEARNING */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>Data Scientist | QBS Learning | Delhi, India (Remote)</h4>
                <span className="date-tag">Aug 2024 – Nov 2024</span>
              </div>
              <p className="job-intro">Contributed to UAE-based projects developing K-8 textbooks with AI-driven content creation.</p>
              <ul className="job-details">
                <li>Utilized LLMs with prompt engineering to streamline lesson structures and ensure content originality.</li>
                <li>Achieved <strong>70% reduction</strong> in SME time needed to develop lessons.</li>
                <li>Refined AI solutions to deliver curriculum-aligned content adhering to regional standards.</li>
              </ul>
            </div>

            {/* OPTIMUM.AI */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>ML Engineer | Optimum.ai | Freelance (Remote)</h4>
                <span className="date-tag">Apr 2024 – Aug 2024</span>
              </div>
              <p className="job-intro">Led international teams and taught a deep learning crash course (Transformers, LSTM, Neural Networks).</p>
              <ul className="job-details">
                <li><strong>FinThrive AI:</strong> Developed a multi-agent system using <strong>CrewAI & Mistral LLM</strong> for personalized financial advice.</li>
                <li>Implemented ML models for expense tracking and debt optimization with a <strong>Streamlit</strong> interface.</li>
              </ul>
            </div>

            {/* OMDENA */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>ML Engineer | Omdena | Freelance (Remote)</h4>
                <span className="date-tag">Sep 2023 – July 2024</span>
              </div>
              <p className="job-intro">Led collaborative efforts with a global team of 100+ members to deliver end-to-end ML solutions.</p>
              <ul className="job-details">
                <li><strong>Global Mapping:</strong> Implemented <strong>YOLO Segmentation, SAM, and FastSAM</strong> for aerial imagery feature extraction (88% accuracy).</li>
                <li><strong>Mental Health AI:</strong> Conducted sentiment analysis using <strong>XGBoost & BERT</strong>; utilized <strong>RAG with Mistral-7b</strong> for data interpretation.</li>
                <li>Deployed user-friendly applications on <strong>Hugging Face</strong> servers.</li>
              </ul>
            </div>

            {/* INNODATATICS */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>Data Scientist Intern | Innodatatics | Remote</h4>
                <span className="date-tag">Aug 2023 – Jan 2024</span>
              </div>
              <p className="job-intro">Transformed raw data into actionable insights using Power BI and custom ML algorithms.</p>
              <ul className="job-details">
                <li><strong>Bird Tracking:</strong> Built a <strong>Yolov8</strong> model for real-time tracking, improving accuracy by 30% and saving 15+ hours/week.</li>
                <li><strong>Medical Inventory:</strong> Evaluated 10 time-series models; <strong>PROPHET</strong> achieved 91% accuracy, leading to a 30% reduction in bounce rate and significant revenue increase.</li>
              </ul>
            </div>

            {/* POSTDOC */}
            <div className="timeline-item">
              <div className="job-header">
                <h4>Postdoctoral Fellow | Shanghai Jiao Tong University | China</h4>
                <span className="date-tag">Dec 2019 - Nov 2022</span>
              </div>
              <ul className="job-details">
                <li>Pioneered a <strong>Nuclear Isomer Database</strong> from 10,000+ articles (2,750 unique entries), resulting in a highly cited research article.</li>
                <li>Utilized <strong>Deep Neural Networks</strong> to predict hyperparameters for neutron-rich nuclei (A~160) for nuclear astrophysics.</li>
                <li>Provided theoretical insights into fission processes using <strong>isospin conservation</strong>.</li>
              </ul>
            </div>
          </div>
        )


        case 'publications':
        return (
          <div className="content-card">
            <h2 className="section-title">List of Publications</h2>
            
            {/* INTERNATIONAL JOURNALS */}
            <div className="pub-group">
              <h3 className="category-label">Papers in Journal (International)</h3>
              <ul className="clean-list">
                <li><strong>1. Atlas of nuclear isomers—Second edition</strong>, Swati Garg, B. Maheshwari, B. Singh, Yang Sun, A. Goel, A. K. Jain, <em>Atomic Data and Nuclear Data Tables 150, 101546 (2023)</em>.</li>
                <li><strong>2. Measurement of relative isotopic yield distribution of even-even fission fragments from 235U (nth, f) following γ-ray spectroscopy</strong>, A. Dey, D.C. Biswas, A. Chakraborty, S. Mukhopadhyay, ..., Swati Garg, B. Maheshwari, A. K. Jain, ..., and W. Urban, <em>Physical Review C, 103(4), 044322 (2021)</em>.</li>
                <li><strong>3. Isospin conservation in compound nuclear fusion–fission reactions–empirical evidence</strong>, Swati Garg, A. K. Jain, Y. Sun, and A. Goel, <em>Eur. Phys. J. Special Topics 229, 2527–2541 (2020)</em>.</li>
                <li><strong>4. Role of isospin and its conservation in neutron-rich fission fragments</strong>, Swati Garg, B. Maheshwari and A. K. Jain, <em>Phys. Scr. 93, 124008 (2018)</em>.</li>
                <li><strong>5. Nuclear Data Sheets for A=217</strong>, F. G. Kondev, E. A. McCutchan, B. Singh, ..., Swati Garg, ..., R. Shearman, <em>Nuclear Data Sheets 147, 382 (2018)</em>.</li>
                <li><strong>6. Goodness of Isospin in Neutron Rich Systems from the Fission Fragment Distribution</strong>, Swati Garg and A. K. Jain, <em>Phys. Scr. 92, 094001 (2017)</em>.</li>
                <li><strong>7. Atlas of Nuclear Isomers</strong>, A. K. Jain, B. Maheshwari, Swati Garg, M. Patial and B. Singh, <em>Nuclear Data Sheets 128, 1 (2015)</em>.</li>
                <li><strong>8. Effect of Isospin Degree of Freedom on Transverse Momentum Spectra</strong>, Sukhjeet Kaur and Swati, <em>International Journal of Modern Physics E 22, 1350078 (2013)</em>.</li>
              </ul>
            </div>

            {/* NATIONAL JOURNALS */}
            <div className="pub-group">
              <h3 className="category-label">Papers in Journal (National)</h3>
              <ul className="clean-list">
                <li><strong>1. Test of Isospin Conservation in Thermal Neutron-induced Fission of 245Cm</strong>, Swati Garg and A. K. Jain, <em>Pramana- J. Phys. 92, 35 (2019)</em>.</li>
                <li><strong>2. Rapid Communication: Δv = 2 seniority changing transitions in yrast 3− states and B(E3) systematics of Sn isotopes</strong>, B. Maheshwari, Swati Garg and A. K. Jain, <em>Pramana- J. Phys. 89, 75 (2017)</em>.</li>
              </ul>
            </div>

            {/* INTERNATIONAL ABROAD */}
            <div className="pub-group">
              <h3 className="category-label">Conference Proceedings (International Abroad)</h3>
              <ul className="clean-list">
                <li><strong>1. Does Compound Nucleus remember its Isospin- An Evidence from Fission Widths</strong>, Swati Garg and A. K. Jain, <em>EPJ Web of Conferences 178, 05008 (2018)</em>.</li>
                <li><strong>2. Isospin Conservation in Neutron Rich Systems of Heavy Nuclei</strong>, A. K. Jain and Swati Garg, <em>EPJ Web of Conferences 178, 05007 (2018)</em>.</li>
                <li><strong>3. Isospin Effects on the Transverse Momentum Spectra of Protons and Neutrons</strong>, Sukhjeet Kaur and Swati, <em>Acta Physica Polonica B 45, 463 (2014)</em>.</li>
              </ul>
            </div>

            {/* INTERNATIONAL WITHIN INDIA */}
            <div className="pub-group">
              <h3 className="category-label">Conference Proceedings (International within India)</h3>
              <ul className="clean-list">
                <li><strong>1. Role of Isospin in Heavy and Neutron-rich Nuclei</strong>, S. Garg, <em>Proceedings of DAE Symposium on Nuclear Physics 63, 1238 (2018)</em>.</li>
                <li><strong>2. Role of isospin degree of freedom in transverse momentum spectra of nucleons</strong>, Sukhjeet Kaur and Swati, <em>Proceedings of DAE Symposium on Nuclear Physics 58, 324 (2013)</em>.</li>
                <li><strong>3. Sensitivity of transverse momentum spectra of nucleons towards symmetry energy</strong>, Sukhjeet Kaur and Swati, <em>Proceedings of DAE Symposium on Nuclear Physics 58, 322 (2013)</em>.</li>
              </ul>
            </div>

            {/* NATIONAL PROCEEDINGS */}
            <div className="pub-group">
              <h3 className="category-label">Conference Proceedings (National)</h3>
              <ul className="clean-list">
                <li><strong>1. Isospin Dependence in Fission Fragment Yields</strong>, S. Garg, B. Maheshwari, D. Choudhury and A. K. Jain, <em>DAE Symp. on Nucl. Phys. 64, 74 (2019)</em>.</li>
                <li><strong>2. Purity of Isospin and its importance in n-rich systems</strong>, S. Garg and A. K. Jain, <em>DAE Symposium on Nuclear Physics 61, 74 (2016)</em>.</li>
                <li><strong>3. Role of Isospin in Neutron-Rich Fission Fragments</strong>, S. Garg, B. Maheshwari and A. K. Jain, <em>DAE Symposium on Nuclear Physics 60, 170 (2015)</em>.</li>
                <li><strong>4. Comparison of the Weisskopf estimates in spin and K-isomers</strong>, S. Garg, B. Maheshwari, Rohit Rajput, P. C. Srivastava and A. K. Jain, <em>DAE Symposium on Nuclear Physics 59, 112 (2014)</em>.</li>
                <li><strong>5. In-beam spectroscopy of 215Fr</strong>, Pragati, A.Y. Deo, ..., S. Garg, B. Maheshwari and A. K. Jain, <em>DAE Symposium on Nuclear Physics 62, 160 (2017)</em>.</li>
                <li><strong>6. High spin states in 216Fr</strong>, Pragati, A.Y. Deo, ..., S. Garg and B. Maheshwari, <em>DAE Symposium on Nuclear Physics 61, 312 (2016)</em>.</li>
              </ul>
            </div>
          </div>
        )


      default:
        return null
    }
  }

  return (
    <div className="portfolio-wrapper">
      <header className="top-nav">
        <div className="nav-logo">DR. SWATI</div>
        <nav className="nav-links">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</button>
          <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
          <button className={activeTab === 'publications' ? 'active' : ''} onClick={() => setActiveTab('publications')}>Publications</button>
        </nav>
      </header>

      <main className="main-viewport">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
