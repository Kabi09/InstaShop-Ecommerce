import styles from './Process.module.scss';
import { processSteps } from '../../data/companyData';

export default function Process() {
  return (
    <section id="process" className={`section ${styles.processSection}`}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Methodology</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A clear, predictable 5-step engineering process that keeps you in full control of milestones and deliverables.
          </p>
        </div>

        {/* Timeline wrapper: horizontal on desktop, vertical on mobile */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineBar} aria-hidden="true"></div>

          <div className={styles.stepsList}>
            {processSteps.map((item) => (
              <div key={item.step} className={styles.stepItem}>
                <div className={styles.stepNode}>
                  <span className={styles.stepNumber}>{item.step}</span>
                </div>

                <div className={styles.stepCard}>
                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
