import Link from 'next/link';
import styles from './CTA.module.scss';
import { companyInfo } from '../../data/companyData';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaBadge}>Ready to Build?</span>
            <h2 className={styles.ctaHeading}>Have a Project in Mind?</h2>
            <p className={styles.ctaText}>
              Tell us what you are trying to build. We can discuss the requirements, technical approach and next steps.
            </p>

            <div className={styles.ctaActions}>
              <Link href="#contact" className={styles.btnStart}>
                Start a Conversation
              </Link>
              <a href={companyInfo.phoneHref} className={styles.btnCall}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call {companyInfo.phone}
              </a>
            </div>

            <div className={styles.ctaEmailRow}>
              <span>Direct Inquiries:</span>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
