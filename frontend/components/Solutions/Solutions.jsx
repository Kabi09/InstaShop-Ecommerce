import Link from 'next/link';
import styles from './Solutions.module.scss';
import { solutionsData } from '../../data/companyData';

export default function Solutions() {
  return (
    <section id="solutions" className={`section ${styles.solutionsSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Solutions</span>
          <h2 className="section-title">Solutions Built Around Your Business</h2>
          <p className="section-subtitle">
            Rather than forcing your operations into generic software templates, we design and adapt systems to match your unique operational logic.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutionsData.map((sol, index) => (
            <div key={sol.title} className={styles.solutionCard}>
              <div className={styles.cardTop}>
                <span className={styles.indexNum}>0{index + 1}</span>
                <span className={styles.badgeCustom}>Customizable</span>
              </div>
              <h3 className={styles.solutionTitle}>{sol.title}</h3>
              <p className={styles.solutionDescription}>{sol.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.customNoticeBox}>
          <div className={styles.noticeIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className={styles.noticeText}>
            <h4>Need a specialized business workflow?</h4>
            <p>
              Every solution above is fully modular. We audit your existing paperwork, spreadsheets, and manual steps to construct a purpose-built system.
            </p>
          </div>
          <Link href="#contact" className={styles.noticeAction}>
            Discuss Custom Workflow
          </Link>
        </div>
      </div>
    </section>
  );
}
