import Link from 'next/link';
import styles from './Footer.module.scss';
import { companyInfo, navLinks } from '../../data/companyData';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitleRow}>
              <span className={styles.brandMark}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <span className={styles.brandName}>{companyInfo.name}</span>
            </div>

            <p className={styles.brandTagline}>
              Software Development &amp; IT Services
            </p>

            <p className={styles.brandBio}>
              Tamil Nadu-based technology enterprise building dependable websites, web applications, and custom business solutions.
            </p>
          </div>

          {/* Quick Nav */}
          <div className={styles.navCol}>
            <h4 className={styles.colHeading}>Navigation</h4>
            <ul className={styles.linksList}>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.linkItem}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklinks */}
          <div className={styles.servicesCol}>
            <h4 className={styles.colHeading}>Capabilities</h4>
            <ul className={styles.linksList}>
              <li><Link href="#services" className={styles.linkItem}>Web Development</Link></li>
              <li><Link href="#services" className={styles.linkItem}>Custom Software</Link></li>
              <li><Link href="#services" className={styles.linkItem}>E-Commerce Platforms</Link></li>
              <li><Link href="#services" className={styles.linkItem}>Mobile Applications</Link></li>
              <li><Link href="#services" className={styles.linkItem}>UI / UX Systems</Link></li>
              <li><Link href="#services" className={styles.linkItem}>Maintenance &amp; Support</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.contactCol}>
            <h4 className={styles.colHeading}>Contact &amp; Offices</h4>
            <div className={styles.contactDetails}>
              <p>
                <span>Enquiries:</span>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </p>
              <p>
                <span>Phone:</span>
                <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              </p>
              <p>
                <span>Chennai Unit:</span>
                {companyInfo.unit1.shortAddress}
              </p>
              <p>
                <span>Registered Unit:</span>
                {companyInfo.unit2.shortAddress}
              </p>
              <p>
                <span>UDYAM Reg:</span>
                {companyInfo.udyamRegistration}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {companyInfo.copyrightYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <span className={styles.locationBadge}>Chennai &amp; Nagapattinam, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
