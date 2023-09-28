import styles from './intro.module.css';
import { Phone } from '../Phone/Phone';

export const Intro = () => {
  return (
    <section className={styles['intro']}>
      <div className={styles['intro-content']}>
        <h1 className={styles['intro-title']}>
          Crypto payments for <span>telegram bots</span>
        </h1>
        <h2 className={styles['intro-subtitle']}>
          Seamlessly accept crypto payments <br /> in your Telegram bots and
          services.
        </h2>
        <button className={styles['intro-button']}>Get started</button>
      </div>
      <Phone />
    </section>
  );
};
