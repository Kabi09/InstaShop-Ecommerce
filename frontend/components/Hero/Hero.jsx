import Link from 'next/link';
import styles from './Hero.module.scss';
import { trustPillars } from '../../data/companyData';

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Content */}
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badge}>Software Development &amp; IT Services</span>
              <span className={styles.locationTag}>Chennai, India</span>
            </div>

            <h1 className={styles.mainHeading}>
              Building Digital Solutions That Move Businesses Forward.
            </h1>

            <p className={styles.supportingText}>
              Dudez is a software development and IT services company based in Chennai, Tamil Nadu.
              We build reliable websites, web applications and custom software solutions for businesses.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="#contact" className={styles.primaryButton}>
                Start a Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="#services" className={styles.secondaryButton}>
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: Human-designed software development visual */}
          <div className={styles.heroVisual} aria-label="Software Architecture &amp; Code Interface Preview">
            <div className={styles.ideWindow}>
              {/* Window Header */}
              <div className={styles.ideHeader}>
                <div className={styles.trafficLights}>
                  <span className={styles.dotRed}></span>
                  <span className={styles.dotYellow}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <div className={styles.ideTitle}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <span>dudez-engine / production / architecture.js</span>
                </div>
                <span className={styles.ideBadge}>v2.4.0</span>
              </div>

              {/* Window Body: Clean architecture structure */}
              <div className={styles.ideBody}>
                {/* Code Panel */}
                <div className={styles.codeSnippet}>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>01</span>
                    <span className={styles.tokenKeyword}>const</span> <span className={styles.tokenIdent}>solution</span> = <span className={styles.tokenKeyword}>new</span> <span className={styles.tokenClass}>BusinessPlatform</span>({`{`}
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>02</span>
                    &nbsp;&nbsp;<span className={styles.tokenProp}>client</span>: <span className={styles.tokenString}>&quot;Enterprise Workflow&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>03</span>
                    &nbsp;&nbsp;<span className={styles.tokenProp}>architecture</span>: <span className={styles.tokenString}>&quot;Modular Micro-services&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>04</span>
                    &nbsp;&nbsp;<span className={styles.tokenProp}>database</span>: <span className={styles.tokenString}>&quot;ACID Compliant + Scalable&quot;</span>,
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>05</span>
                    &nbsp;&nbsp;<span className={styles.tokenProp}>support</span>: <span className={styles.tokenConst}>true</span>
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.lineNum}>06</span>
                    {`});`}
                  </div>
                </div>

                {/* Sub-panel: System Metrics / Service Status */}
                <div className={styles.systemStatusGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>API Response</div>
                    <div className={styles.metricValue}>
                      <span className={styles.metricDot}></span> 32ms avg
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>Code Standards</div>
                    <div className={styles.metricValue}>100% Passed</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>Deployment Pipeline</div>
                    <div className={styles.metricValue}>Production Ready</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricLabel}>Location Hub</div>
                    <div className={styles.metricValue}>Chennai, IN</div>
                  </div>
                </div>
              </div>

              {/* Window Footer */}
              <div className={styles.ideFooter}>
                <span className={styles.footerStatus}>
                  <span className={styles.greenPing}></span> Systems Normal &amp; Monitoring
                </span>
                <span className={styles.footerLang}>JavaScript (ES2026)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small trust info strip below hero */}
        <div className={styles.trustStrip} aria-label="Core Competencies">
          {trustPillars.map((pillar) => (
            <div key={pillar.label} className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className={styles.trustText}>
                <div className={styles.trustLabel}>{pillar.label}</div>
                <div className={styles.trustDesc}>{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
