import Link from 'next/link';
import styles from './Projects.module.scss';
import { projectsData } from '../../data/companyData';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Architecture</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            Demonstration architectures showcasing how we structure data models, user flows, and business utilities.
          </p>
        </div>

        <div className={styles.projectsList}>
          {projectsData.map((project, idx) => (
            <article key={project.id} className={styles.projectCard}>
              {/* Project Meta / Description Column */}
              <div className={styles.projectInfo}>
                <div className={styles.badgeRow}>
                  <span className={styles.projectNumber}>{project.number}</span>
                  <span className={styles.conceptBadge}>{project.badge}</span>
                  <span className={styles.categoryName}>{project.category}</span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.highlightsBox}>
                  <h4 className={styles.highlightsTitle}>Key Capabilities:</h4>
                  <ul className={styles.highlightsList}>
                    {project.highlights.map((item) => (
                      <li key={item} className={styles.highlightItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techStackRow}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>

                <div className={styles.actionRow}>
                  <Link href="#contact" className={styles.projectActionBtn}>
                    Request Similar Architecture
                  </Link>
                </div>
              </div>

              {/* Project Wireframe / UI Preview Column */}
              <div className={styles.projectVisual}>
                <div className={styles.screenFrame}>
                  <div className={styles.screenHeader}>
                    <div className={styles.windowDots}>
                      <span></span><span></span><span></span>
                    </div>
                    <span className={styles.screenAddress}>app.dudez.in/demo/{project.id}</span>
                  </div>

                  <div className={styles.screenContent}>
                    {idx === 0 && (
                      <div className={styles.mockDashboard}>
                        <div className={styles.mockSidebar}>
                          <span className={styles.mockLineShort}></span>
                          <span className={styles.mockLineShort}></span>
                          <span className={styles.mockLineShort}></span>
                        </div>
                        <div className={styles.mockMain}>
                          <div className={styles.mockKpiRow}>
                            <div className={styles.mockKpi}>
                              <small>Workflows Active</small>
                              <strong>48</strong>
                            </div>
                            <div className={styles.mockKpi}>
                              <small>Efficiency Index</small>
                              <strong>98.4%</strong>
                            </div>
                          </div>
                          <div className={styles.mockChartArea}>
                            <span className={styles.mockChartBar} style={{ height: '40%' }}></span>
                            <span className={styles.mockChartBar} style={{ height: '70%' }}></span>
                            <span className={styles.mockChartBar} style={{ height: '55%' }}></span>
                            <span className={styles.mockChartBar} style={{ height: '90%' }}></span>
                            <span className={styles.mockChartBar} style={{ height: '65%' }}></span>
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className={styles.mockStore}>
                        <div className={styles.mockStoreNav}>
                          <span className={styles.mockBrandPill}>Catalog</span>
                          <span className={styles.mockSearchPill}>Search products...</span>
                        </div>
                        <div className={styles.mockProductsGrid}>
                          <div className={styles.mockItem}>
                            <div className={styles.mockImgBox}></div>
                            <span className={styles.mockItemTitle}>Product SKU #104</span>
                            <span className={styles.mockItemPrice}>₹1,499</span>
                          </div>
                          <div className={styles.mockItem}>
                            <div className={styles.mockImgBox}></div>
                            <span className={styles.mockItemTitle}>Product SKU #105</span>
                            <span className={styles.mockItemPrice}>₹2,899</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className={styles.mockPos}>
                        <div className={styles.mockPosHeader}>
                          <span>POS Counter 01</span>
                          <span className={styles.gstTag}>GST Invoice #2026-88</span>
                        </div>
                        <div className={styles.mockPosTable}>
                          <div className={styles.tableRowHead}>
                            <span>Item</span>
                            <span>Qty</span>
                            <span>Total</span>
                          </div>
                          <div className={styles.tableRow}>
                            <span>Industrial Sensor</span>
                            <span>04</span>
                            <span>₹8,400</span>
                          </div>
                          <div className={styles.tableRow}>
                            <span>Terminal Cable 5m</span>
                            <span>12</span>
                            <span>₹3,600</span>
                          </div>
                        </div>
                        <div className={styles.mockPosSummary}>
                          <span>Net Payable:</span>
                          <strong>₹12,000.00</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
