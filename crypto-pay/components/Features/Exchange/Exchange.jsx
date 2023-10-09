import styles from './exchange.module.css';
import Link from 'next/link';
import Image from 'next/image';
import exchangeButton from '/public/images/exchange/exchange-button.svg';
import exchangeButonDark from '/public/images/exchange/exchange-button-dark.svg';
import { exchangeLabelsData, exchangeUSDLabel } from './exchangeLabelsData';

export const Exchange = ({ darkTheme }) => {
  return (
    <div
      className={`${styles['exchange']} ${darkTheme && styles['dark-white']}`}
    >
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
        <div className={styles['exchange-button-wrapper']}>
          <button className={styles['exchange-button']}>
            <Image
              src={darkTheme ? exchangeButonDark : exchangeButton}
              width={43}
              height={25}
              alt="usd label"
            />
          </button>
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
      <h3
        className={`${styles['exchange-title']} ${
          darkTheme && styles['dark-white']
        }`}
      >
        Real-time <br /> exchange rates
      </h3>
      <p
        className={`${styles['exchange-details']} ${
          darkTheme && styles['dark-white80']
        }`}
      >
        Request up to date currency rate with the{' '}
        <Link className={styles['link']} href={'#'}>
          getExchangeRates
        </Link>{' '}
        API method
      </p>
    </div>
  );
};
