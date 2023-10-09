import styles from './community.module.css';
import Image from 'next/image';
import { communityData } from './communityData';

export const Community = ({ darkTheme }) => {
  return (
    <div
      className={`${styles['community']}  ${darkTheme && styles['dark-white']}`}
    >
      <div className={styles['community-container']}>
        <h2
          className={`${styles['community-title']}  ${
            darkTheme && styles['dark-white']
          }`}
        >
          Join dev community
        </h2>
        <p
          className={`${styles['community-details']}  ${
            darkTheme && styles['dark-white80']
          }`}
        >
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
              <p
                className={`${styles['label-title']} ${
                  darkTheme && styles['dark-white80']
                }`}
              >
                {logo.title}
              </p>
            </div>
          ))}
        </div>
        <button>Open Devs chat</button>
      </div>
    </div>
  );
};
