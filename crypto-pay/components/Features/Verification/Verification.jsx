import styles from './verification.module.css';
import phoneHalfBody from '/public/images/verification/phone-half-body.png';
import phoneHalfBodyDark from '/public/images/verification/half-phone-dark.png';
import { verificationData, verificationDataDark } from './verificationData';
import Image from 'next/image';
import Link from 'next/link';

export const Verification = ({ darkTheme }) => {
  return (
    <div
      className={`${styles['verification']} ${
        darkTheme && styles['dark-white']
      }`}
    >
      <div className={styles['verification-phone-wrapper']}>
        <Image
          src={darkTheme ? phoneHalfBodyDark : phoneHalfBody}
          width={darkTheme ? 600 : 474}
          height={358}
          alt="usd label"
        />
        <Image
          className={styles['message-image']}
          src={
            darkTheme ? verificationDataDark[0].src : verificationData[0].src
          }
          width={400}
          height={125}
          alt="message example"
        />
        <Image
          className={
            darkTheme
              ? styles['message-shadow-image-dark']
              : styles['message-shadow-image']
          }
          src={
            darkTheme
              ? verificationDataDark[0].srcBlur
              : verificationData[0].srcBlur
          }
          width={370}
          height={125}
          alt="message example"
        />
      </div>
      <h3
        className={`${styles['verification-title']} ${
          darkTheme && styles['dark-white']
        }`}
      >
        Send coins to users
      </h3>
      <p
        className={`${styles['verification-details']} ${
          darkTheme && styles['dark-white80']
        }`}
      >
        Automate payouts to users with{' '}
        <Link className={styles['link']} href={'#'}>
          {' '}
          transfer
        </Link>{' '}
        API method
      </p>
    </div>
  );
};
