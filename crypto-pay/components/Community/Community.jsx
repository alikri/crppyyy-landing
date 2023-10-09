import styles from './community.module.css';
import Image from 'next/image';
import { communityData } from './communityData';

export const Community = () => {
  return (
    <div className={styles['community']}>
      <div className={styles['community-container']}>
        <h2>Join dev community</h2>
        <p>
          Connect with bot developers and explore the possibilities our crypto
          payments service unlocks.
        </p>
        <div className={styles['logos-container']}>
          {communityData.map((logo, index) => (
            <div
              key={`${logo.title} ${index}`}
              className={styles['logo-container']}
            >
              <Image
                className={styles[`logo`]}
                src={logo.src}
                width={112}
                height={106}
                alt={logo.alt}
              />
              <p>{logo.title}</p>
            </div>
          ))}
        </div>
        <button>Open Devs chat</button>
      </div>
    </div>
  );
};
