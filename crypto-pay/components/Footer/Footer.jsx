import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo_crypto.svg';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-logo']}>
          <Image src={logo} alt="Crypto Pay" width={64} height={64} />
        </div>
        <div className={styles['footer-navigation']}>
          <div className={styles['footer-link-wrapper']}>
            <Link className={styles['footer-link']} href={'/'}>
              Use cases
            </Link>
          </div>
          <div className={styles['footer-link-wrapper']}>
            <Link className={styles['footer-link']} href={'/'}>
              Features
            </Link>
          </div>
          <div>
            <Link className={styles['footer-link']} href={'/'}>
              How to start
            </Link>
          </div>
        </div>
        <button className={styles['footer-button']}>Get started</button>
      </div>
      <p className={styles['footer-title']}>©2023 Crypto Bot</p>
    </footer>
  );
};
