import styles from './features.module.css';
import { Cryptocurrencies } from './Cryptocurrencies/Cryptocurrencies';
import { Commision } from './Commision/Commision';
import { Statistics } from './Statistics/Statistics';
import { Exchange } from './Exchange/Exchange';
import { Verification } from './Verification/Verification';
import { Anonymous } from './Anonymous/Anonymous';

export const Features = ({ darkTheme }) => {
  return (
    <section className={styles['features']}>
      <div className={styles['features-container']}>
        <div className={styles['features-container-row1']}>
          <Cryptocurrencies darkTheme={darkTheme} />
        </div>
        <div className={styles['features-container-row2']}>
          <div className={styles['features-container-column1']}>
            <Commision darkTheme={darkTheme} />
            <Exchange darkTheme={darkTheme} />
          </div>
          <div className={styles['features-container-column2']}>
            <Statistics darkTheme={darkTheme} />
          </div>
        </div>
        <div className={styles['features-container-row3']}>
          <Verification />
          <Anonymous />
        </div>
      </div>
    </section>
  );
};
