import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo_crypto.svg';

export const Header = ({ darkTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-logo']}>
        <Image src={logo} alt="Crypto Pay" width={64} height={64} />
      </div>
      <div className={styles['header-navigation']}>
        <div className={styles['header-link-wrapper']}>
          <Link
            className={`${styles['header-link']} ${
              darkTheme && styles['header-link-dark']
            }`}
            href={'/'}
          >
            Use cases
          </Link>
        </div>
        <div className={styles['header-link-wrapper']}>
          <Link
            className={`${styles['header-link']} ${
              darkTheme && styles['header-link-dark']
            }`}
            href={'/'}
          >
            Features
          </Link>
        </div>
        <div>
          <Link
            c
            className={`${styles['header-link']} ${
              darkTheme && styles['header-link-dark']
            }`}
            href={'/'}
          >
            How to start
          </Link>
        </div>
      </div>
      <button
        className={`${styles['header-button']} ${
          darkTheme && styles['header-button-dark']
        }`}
      >
        Get started
      </button>
    </header>
  );
};
