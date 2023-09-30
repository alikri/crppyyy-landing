import styles from './features.module.css';
import { featuresData } from './features-data';
import { Feature } from './Feature';

export const Features = () => {
  return (
    <section className={styles['features']}>
      <div className={styles['features-wrapper']}>
        {featuresData.map((feature, index) => (
          <Feature key={`feature${index}`} feature={feature} />
        ))}
      </div>
      <div className={styles['features-slider']}></div>
    </section>
  );
};
