import styles from './commision.module.css';
import Image from 'next/image';
import Link from 'next/link';
import palm from '../../../public/images/commision/palm.png';

export const Commision = ({ darkTheme }) => {
  return (
    <div
      className={`${styles['commision']}  ${darkTheme && styles['dark-white']}`}
    >
      <div className={styles['commision-wrapper']}>
        <div className={styles['commision-button-wrapper']}>
          <button
            className={`${styles['commision-button']} ${
              darkTheme && styles['dark-button']
            }`}
          >
            <Image src={palm} width={21} height={21} alt="Tree icon" />
            <span className={`${darkTheme && styles['dark-button-text']}`}>
              Create App
            </span>
            <Image
              className={styles['commision-cursor']}
              src={'/images/commision/cursor.svg'}
              width={45}
              height={45}
              alt="Cursor icon"
            />
          </button>
        </div>
        <h3
          className={`${styles['commision-title']}  ${
            darkTheme && styles['dark-white']
          }`}
        >
          One click to start
        </h3>
        <p
          className={`${styles['commision-details']}  ${
            darkTheme && styles['dark-white80']
          }`}
        >
          Open{' '}
          <Link className={styles['link']} href={'#'}>
            @CryptoBot
          </Link>
          , go to{' '}
          <Link className={styles['link']} href={'#'}>
            Crypto Pay
          </Link>{' '}
          and tap Create App to get API Token
        </p>
      </div>
    </div>
  );
};
