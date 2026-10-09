import styles from './WhyDudez.module.scss';
import { whyWorkWithUs, companyInfo } from '../../data/companyData';

export default function WhyDudez() {
  return (
    <section id="why-ameyy" className={`section ${styles.whySection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Values &amp; Standards</span>
          <h2 className="section-title">Why Work With {companyInfo.name}</h2>
          <p className="section-subtitle">
            We focus on honest engineering, clear communication, and delivering software that directly improves your daily business operations.
          </p>
        </div>

        <div className={styles.grid}>
          {whyWorkWithUs.map((item, index) => (
            <div key={item.title} className={styles.itemCard}>
              <div className={styles.cardHeader}>
                <span className={styles.indexCircle}>{index + 1}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
