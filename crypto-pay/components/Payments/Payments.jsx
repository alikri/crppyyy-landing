import Image from 'next/image';
import Link from 'next/link';
import styles from './payments.module.css';

export const Payments = () => {
  const cryptocurrenciesLabels = [
    {
      src: '/images/cryptocurrencies/eth.svg',
      alt: 'Ethereum',
      with: 110,
      height: 110,
      name: 'ETH',
    },
    {
      src: '/images/cryptocurrencies/usdt.svg',
      alt: 'Bitcoin',
      with: 110,
      height: 110,
      name: 'USDT',
    },
    {
      src: '/images/cryptocurrencies/ton.svg',
      alt: 'Litecoin',
      with: 110,
      height: 110,
      name: 'TON',
    },
    {
      src: '/images/cryptocurrencies/btc.svg',
      alt: 'BTC Crystal',
      with: 110,
      height: 110,
      name: 'BTC',
    },
    {
      src: '/images/cryptocurrencies/trx.svg',
      alt: 'TRON',
      with: 110,
      height: 110,
      name: 'TRX',
    },
    {
      src: '/images/cryptocurrencies/ltc.svg',
      alt: 'LTC Coin',
      with: 96,
      height: 96,
      name: 'LTC',
    },
    {
      src: '/images/cryptocurrencies/usdc.svg',
      alt: 'USDC',
      with: 110,
      height: 110,
      name: 'USDC',
    },
    {
      src: '/images/cryptocurrencies/bnb.svg',
      alt: 'Binance Coin',
      with: 100,
      height: 100,
      name: 'BNB',
    },
  ];
  return (
    <section className={styles['payments']}>
      <div className={styles['payments-container']}>
        <div
          className={`${styles['payments-example']} ${styles['payments-cryptocurrencies']}`}
        >
          <h3 className={styles['payments-cryptocurrencies-title']}>
            Accept a wide range of cryptocurrencies
          </h3>
          <p className={styles['payments-cryptocurrencies-details']}>
            Bill any supported cryptocurrencies with asset parameter in{' '}
            <Link href={'#'}>GetInvoice</Link> method
          </p>
          <div className={styles['payments-cryptocurrencies-labels-wrapper']}>
            {cryptocurrenciesLabels.map((label, index) => (
              <div className={styles['cryptocurrency-label-container']}>
                <div
                  style={{
                    height: '110px',
                    width: '110px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    key={`label-${index}`}
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
        <div
          className={`${styles['payments-example']} ${styles['payments-create-app']}`}
        ></div>
        <div
          className={`${styles['payments-example']} ${styles['payments-statistics']}`}
        ></div>
        <div
          className={`${styles['payments-example']} ${styles['payments-exchange']}`}
        ></div>
        <div
          className={`${styles['payments-example']} ${styles['payments-send-coins']}`}
        ></div>
        <div
          className={`${styles['payments-example']} ${styles['payments-eanonymous']}`}
        ></div>
        <div
          className={`${styles['payments-example']} ${styles['another-class-name']}`}
        ></div>
      </div>
    </section>
  );
};
