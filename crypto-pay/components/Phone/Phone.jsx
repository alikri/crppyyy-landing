import styles from './phone.module.css';
import Image from 'next/image';

import PhoneBody from '../../public/images/phone/body.svg';
import PhoneBodyOuside from '../../public/images/phone/body-outside.svg';
import PhoneBackground from '../../public/images/phone/phone-background.svg';
import PhoneInner from '../../public/images/phone/phone-inner.svg';
import PhoneButtons from '../../public/images/phone/phone-buttons.svg';
import PhoneAntennas from '../../public/images/phone/antennas.svg';
import PhoneCamera from '../../public/images/phone/front-camera.svg';
import PhoneNotch from '../../public/images/phone/notch.svg';
import PhoneDark from '../../public/images/phone/phone-dark.svg';

export const Phone = ({ darkTheme }) => {
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
        width={'100%'}
        height={'fit-content'}
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
