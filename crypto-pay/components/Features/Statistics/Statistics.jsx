import styles from './statistics.module.css';
import Image from 'next/image';
import Link from 'next/link';
import statisticsImage from '/public/images/statistics/statistics.svg';

export const Statistics = () => {
  return (
    <div className={styles['statistics']}>
      <div className={styles['statistics-wrapper']}>
        <Image
          src={statisticsImage}
          width={'fit-content'}
          height={'fit-content'}
          alt="Statistics icon"
        />
      </div>
      <h3>Payment statistics</h3>
      <p>
        Open{' '}
        <Link className={styles['link']} href={'#'}>
          @CryptoBot
        </Link>
        , go to{' '}
        <Link className={styles['link']} href={'#'}>
          Crypto Pay
        </Link>{' '}
        and
        <Link className={styles['link']} href={'#'}>
          {' '}
          My Apps, <br />
        </Link>
        App Name to get Statistics
      </p>
    </div>
  );
};
