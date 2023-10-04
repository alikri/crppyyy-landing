import styles from './cryptocurrencies.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { cryptocurrenciesLabels } from './cryptocurrenciesLabels';

export const Cryptocurrencies = () => {
  return (
    <div className={styles['cryptocurrencies']}>
      <h3 className={styles['cryptocurrencies-title']}>
        Accept a wide range of cryptocurrencies
      </h3>
      <p className={styles['cryptocurrencies-details']}>
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
            <p>{label.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
