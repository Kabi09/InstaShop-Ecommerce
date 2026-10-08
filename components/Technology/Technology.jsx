import styles from './Technology.module.scss';
import { technologiesData } from '../../data/companyData';

const categories = [
  { key: 'frontend', title: 'Frontend', items: technologiesData.frontend },
  { key: 'backend', title: 'Backend', items: technologiesData.backend },
  { key: 'database', title: 'Database', items: technologiesData.database },
  { key: 'cloud', title: 'Cloud & Deployment', items: technologiesData.cloud },
];

export default function Technology() {
  return (
    <section id="technology" className={`section ${styles.techSection}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Stack</span>
          <h2 className="section-title">Technology We Work With</h2>
          <p className="section-subtitle">
            Reliable, battle-tested modern tools chosen for maintainability, stability and developer efficiency.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div key={category.key} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <span className={styles.itemCount}>{category.items.length} tools</span>
              </div>

              <div className={styles.itemList}>
                {category.items.map((tech) => (
                  <div key={tech.name} className={styles.techItem}>
                    <div className={styles.techNameRow}>
                      <span className={styles.techDot}></span>
                      <strong className={styles.techName}>{tech.name}</strong>
                    </div>
                    <span className={styles.techDesc}>{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
