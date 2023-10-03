import styles from './commision.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Commision = () => {
  return (
    <div className={styles['commision']}>
      <div className={styles['commision-wrapper']}>
        <div className={styles['commision-button-wrapper']}>
          <button>
            <Image
              src={'/images/commision/tree.svg'}
              width={21}
              height={21}
              alt="Tree icon"
            />
            <span>Create App</span>
            <Image
              className={styles['commision-cursor']}
              src={'/images/commision/cursor.svg'}
              width={45}
              height={45}
              alt="Cursor icon"
            />
          </button>
        </div>
        <h3>One click to start</h3>
        <p>
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
