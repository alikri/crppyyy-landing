import styles from './features.module.css';
import { Cryptocurrencies } from './Cryptocurrencies/Cryptocurrencies';
import { Commision } from './Commision/Commision';
import { Statistics } from './Statistics/Statistics';
import { Exchange } from './Exchange/Exchange';

export const Features = () => {
  return (
    <section className={styles['features']}>
      <div className={styles['features-container']}>
        <div className={styles['features-container-row1']}>
          <Cryptocurrencies />
        </div>
        <div className={styles['features-container-row2']}>
          <div className={styles['features-container-column1']}>
            <Commision />
            <Exchange />
          </div>
          <div className={styles['features-container-column2']}>
            <Statistics />
          </div>
        </div>
        <div className={styles['features-container-row3']}>
          <div className={styles['features-send-coins']}></div>
          <div className={styles['features-anonymous']}></div>
        </div>
      </div>
    </section>
  );
};
