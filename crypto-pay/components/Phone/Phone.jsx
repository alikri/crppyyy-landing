import styles from './phone.module.css';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import PhoneBody from '../../public/images/phone/body.svg';
import PhoneBodyOuside from '../../public/images/phone/body-outside.svg';
import PhoneBackground from '../../public/images/phone/phone-background.svg';
import PhoneInner from '../../public/images/phone/phone-inner.svg';
import PhoneButtons from '../../public/images/phone/phone-buttons.svg';
import PhoneAntennas from '../../public/images/phone/antennas.svg';
import PhoneCamera from '../../public/images/phone/front-camera.svg';
import PhoneNotch from '../../public/images/phone/notch.svg';
import PhoneDark from '../../public/images/phone/phone-dark.svg';
import PhoneInnerSmall from '../../public/images/phone/phone-inner-small.svg';

export const Phone = ({ darkTheme }) => {
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
    <div className={styles['intro-picture']}>
      <Image
        className={styles['phone-antennas']}
        src={PhoneAntennas}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
      <Image
        className={styles['phone-body-outside']}
        src={PhoneBodyOuside}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />

      <Image
        className={styles['phone-body']}
        src={PhoneBody}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
      <Image
        className={styles['phone-background']}
        src={PhoneBackground}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
      <Image
        className={styles['phone']}
        src={darkTheme ? PhoneDark : PhoneInner}
        alt="Crypto Pay"
        width={windowSize.width < 429 ? 300 : '100%'}
        height={windowSize.width < 429 ? 612 : 'fit-content'}
      />
      <Image
        className={styles['phone-buttons']}
        src={PhoneButtons}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
      <Image
        className={styles['phone-front-camera']}
        src={PhoneCamera}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
      <Image
        className={styles['phone-notch']}
        src={PhoneNotch}
        alt="Crypto Pay"
        width={'100%'}
        height={'fit-content'}
      />
    </div>
  );
};
