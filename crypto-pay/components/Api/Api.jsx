import styles from './api.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apiImage from '../../public/images/api/api-img.png';
import apiImageSmall from '../../public/images/api/api-small.png';

export const Api = () => {
  const [windowSize, setWindowSize] = useState({ width: null });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles['api']}>
      <div className={styles['api-container']}>
        <div className={styles['api-info']}>
          <h2>Crypto Pay API</h2>
          <p>
            Explore available methods and types and integrate them in any
            programming language.
          </p>
          <button>
            <Link href={'https://github.com/klev-o/crypto-pay-api'}>
              Open API Docs
            </Link>
          </button>
        </div>
        <div className={styles['api-image-container']}>
          {windowSize.width > 796 && (
            <Image
              className={styles['api-image']}
              src={apiImage}
              alt="figures"
            />
          )}
        </div>
      </div>
    </section>
  );
};
