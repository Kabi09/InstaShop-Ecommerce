import Link from 'next/link';
import styles from './About.module.scss';
import { companyInfo } from '../../data/companyData';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Narrative */}
          <div className={styles.aboutMain}>
            <span className="section-tag">About Us</span>
            <h2 className="section-title">About Dudez</h2>

            <p className={styles.leadParagraph}>
              Dudez is a Chennai-based software development and IT services company focused on building practical digital solutions for businesses.
            </p>

            <p className={styles.bodyParagraph}>
              From websites and e-commerce platforms to custom business applications, we focus on understanding the real requirement first and then building technology around it. We believe the best software is not the one with the most buzzwords, but the one that solves actual operational bottlenecks cleanly and reliably.
            </p>

            <p className={styles.bodyParagraph}>
              Our engineering team collaborates directly with business owners, operations managers, and project leaders to design intuitive software architectures that support long-term business growth.
            </p>

            <div className={styles.ctaRow}>
              <Link href="#contact" className={styles.aboutCta}>
                Get in Touch
              </Link>
              <Link href="#projects" className={styles.aboutSecondaryCta}>
                View Demonstration Work
              </Link>
            </div>
          </div>

          {/* Right Column: Company Info Card */}
          <div className={styles.infoCard}>
            <h3 className={styles.cardHeaderTitle}>Company Details</h3>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Headquarters</span>
                  <p className={styles.infoValue}>{companyInfo.location}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Enquiries &amp; Support</span>
                  <a href={`mailto:${companyInfo.email}`} className={styles.infoLink}>{companyInfo.email}</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Founder Direct</span>
                  <a href={`mailto:${companyInfo.founderEmail}`} className={styles.infoLink}>{companyInfo.founderEmail}</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Direct Phone</span>
                  <a href={companyInfo.phoneHref} className={styles.infoLink}>{companyInfo.phone}</a>
                </div>
              </div>
            </div>

            <div className={styles.cardFootnote}>
              <span>Official Company Domain:</span>
              <strong>{companyInfo.website.replace('https://', '')}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
