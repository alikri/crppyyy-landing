import styles from './verification.module.css';
import phoneHalfBody from '/public/images/verification/phone-half-body.png';
import { verificationData } from './verificationData';
import Image from 'next/image';
import Link from 'next/link';

export const Verification = () => {
  return (
    <div className={styles['verification']}>
      <div className={styles['verification-phone-wrapper']}>
        <Image src={phoneHalfBody} width={474} height={358} alt="usd label" />
        <Image
          className={styles['message-image']}
          src={verificationData[0].src}
          width={400}
          height={125}
          alt="message example"
        />
        <Image
          className={styles['message-shadow-image']}
          src={verificationData[0].srcBlur}
          width={370}
          height={125}
          alt="message example"
        />
      </div>
      <h3>Send coins to users</h3>
      <p>
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
