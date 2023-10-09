import styles from './cryptocurrencies.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { cryptocurrenciesLabels } from './cryptocurrenciesLabels';

export const Cryptocurrencies = ({ darkTheme }) => {
  return (
    <div
      className={`${styles['cryptocurrencies']} ${
        darkTheme && styles['dark-white']
      }`}
    >
      <h3
        className={`${styles['cryptocurrencies-title']} ${
          darkTheme && styles['dark-white']
        }`}
      >
        Accept a wide range of cryptocurrencies
      </h3>
      <p
        className={`${styles['cryptocurrencies-details']} ${
          darkTheme && styles['dark-white80']
        }`}
      >
        Bill any supported cryptocurrencies with asset parameter in{' '}
        <Link className={styles['link']} href={'https://t.me/CryptoBot'}>
          GetInvoice
        </Link>{' '}
        method
      </p>
      <div className={styles['cryptocurrencies-labels-wrapper']}>
        {cryptocurrenciesLabels.map((label, index) => (
          <div
            key={`label-${index}`}
            className={styles['cryptocurrency-label-container']}
          >
            <div className={styles['cryptocurrency-image-wrapper']}>
              <Image
                className={styles['cryptocurrency-image']}
                src={label.src}
                width={label.with}
                height={label.height}
                alt="Crypto currency label"
              />
            </div>
            <p
              className={`${styles['logo-title']}  ${
                darkTheme && styles['dark-white80']
              }`}
            >
              {label.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
