import { useTranslation } from 'react-i18next'
import styles from './About.module.css'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>{t('about.label')}</p>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              {t('about.heading').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </div>
          <div className={styles.right}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <div className={styles.tags}>
              {t('about.tags', { returnObjects: true }).map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
