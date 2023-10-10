import styles from './api.module.css';
import Image from 'next/image';
import Link from 'next/link';
import apiImage from '../../public/images/api/api-img.png';

export const Api = () => {
  return (
    <section className={styles['api']}>
      <div className={styles['api-container']}>
        <div className={styles['api-info']}>
          <h2>Crypto Pay API</h2>
          <p>
            Explore available methods and types <br /> and integrate them in any
            programming <br />
            language.
          </p>
          <button>
            <Link href={'https://github.com/klev-o/crypto-pay-api'}>
              Open API Docs
            </Link>
          </button>
        </div>
        <div className={styles['api-image-container']}>
          <Image className={styles['api-image']} src={apiImage} alt="figures" />
        </div>
      </div>
    </section>
  );
};
