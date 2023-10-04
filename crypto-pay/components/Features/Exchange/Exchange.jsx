import styles from './exchange.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { exchangeLabelsData, exchangeUSDLabel } from './exchangeLabelsData';

export const Exchange = () => {
  return (
    <div className={styles['exchange']}>
      <div className={styles['exchange-labels-container']}>
        <div className={styles['exchange-labels-crypto']}>
          {exchangeLabelsData.map((label, index) => (
            <Image
              key={`label-exchange${index}`}
              className={styles[`label${index}`]}
              src={
                exchangeLabelsData[2].src === label.src
                  ? label.src
                  : label.bgSrc
              }
              width={label.with}
              height={label.height}
              alt="crypto label"
            />
          ))}
        </div>
        <div className={styles['exchange-labels-usd']}>
          <Image
            key={'label-usd'}
            className={styles['usd-label']}
            src={exchangeUSDLabel.src}
            width={exchangeUSDLabel.with}
            height={exchangeUSDLabel.height}
            alt="usd label"
          />
        </div>
      </div>
      <h3>
        Real-time <br /> exchange rates
      </h3>
      <p>
        Request up to date currency rate with the{' '}
        <Link className={styles['link']} href={'#'}>
          getExchangeRates
        </Link>{' '}
        API method
      </p>
    </div>
  );
};
