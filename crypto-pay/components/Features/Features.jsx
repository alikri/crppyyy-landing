import styles from './features.module.css';
import { Cryptocurrencies } from './Cryptocurrencies/Cryptocurrencies';
import { Commision } from './Commision/Commision';
import { Statistics } from './Statistics/Statistics';

export const Features = () => {
  return (
    <section className={styles['features']}>
      <div className={styles['features-container']}>
        <div className={styles['features-container-row1']}>
          <Cryptocurrencies />
        </div>
        <div className={styles['features-container-row2']}>
          <Commision />
          <Statistics />
          <div className={styles['features-exchange']}></div>
        </div>
        <div className={styles['features-container-row3']}>
          <div className={styles['features-send-coins']}></div>
          <div className={styles['features-anonymous']}></div>
        </div>
      </div>
    </section>
  );
};
