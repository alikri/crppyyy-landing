import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo_crypto.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-logo']}>
        <Image src={logo} alt="Crypto Pay" width={64} height={64} />
      </div>
      <div className={styles['header-navigation']}>
        <div className={styles['header-link-wrapper']}>
          <Link className={styles['header-link']} href={'/'}>
            Use cases
          </Link>
        </div>
        <div className={styles['header-link-wrapper']}>
          <Link className={styles['header-link']} href={'/'}>
            Features
          </Link>
        </div>
        <div>
          <Link className={styles['header-link']} href={'/'}>
            How to start
          </Link>
        </div>
      </div>
      <button className={styles['header-button']}>Get started</button>
    </header>
  );
};
