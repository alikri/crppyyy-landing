import styles from './intro.module.css';
import { Phone } from '../Phone/Phone';
import Image from 'next/image';

const botsImages = [
  '/bots/bot1.svg',
  '/bots/bot2.svg',
  '/bots/bot3.svg',
  '/bots/bot4.svg',
  '/bots/bot5.svg',
];

export const Intro = () => {
  const bots = Array.from({ length: 5 }).map((_, i) => {
    return (
      <Image
        key={`bot${i}`}
        className={styles[`bot-image-${i}`]}
        src={botsImages[i]}
        alt="Crypto Bot"
        width={96}
        height={96}
      />
    );
  });

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
        <div className={styles['bots-container']}>{bots}</div>
        <h2 className={styles['intro-subtitle']}>
          Popular bots use Crypto Pay
        </h2>
      </div>
      <Phone />
    </section>
  );
};
