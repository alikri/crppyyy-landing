import styles from './stepOne.module.css';
import Image from 'next/image';
import Link from 'next/link';
import stepOneImage from '/public/images/instruction/stepOne.svg';

export const StepOne = () => {
  return (
    <div className={styles['step-one']}>
      <div className={styles['step-one-info-wrapper']}>
        <h2>1</h2>
        <h3>Authorizing your app</h3>
        <ol>
          <li>
            Open{' '}
            <Link className={styles['link']} href={'#'}>
              {' '}
              @CryptoBot
            </Link>{' '}
          </li>
          <li>
            Go to{' '}
            <Link className={styles['link']} href={'#'}>
              {' '}
              Crypto Pay
            </Link>{' '}
          </li>
          <li>
            Tap{' '}
            <Link className={styles['link']} href={'#'}>
              {' '}
              Create App
            </Link>{' '}
          </li>
          <li>
            Get{' '}
            <Link className={styles['link']} href={'#'}>
              {' '}
              API Token
            </Link>{' '}
          </li>
        </ol>
      </div>
      <div className={styles['step-one-image-wrapper']}>
        <Image
          className={styles['step-one-image']}
          src={stepOneImage}
          width={'fit-content'}
          height={'auto'}
          alt="step one example"
        />
      </div>
    </div>
  );
};
