import styles from './phone.module.css';
import Image from 'next/image';

import PhoneBody from '../../public/phone/body.svg';
import PhoneBodyOuside from '../../public/phone/body-outside.svg';
import PhoneBackground from '../../public/phone/phone-background.svg';
import PhoneInner from '../../public/phone/phone-inner.svg';
import PhoneButtons from '../../public/phone/phone-buttons.svg';
import PhoneAntennas from '../../public/phone/antennas.svg';
import PhoneCamera from '../../public/phone/front-camera.svg';
import PhoneNotch from '../../public/phone/notch.svg';

export const Phone = () => {
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
        src={PhoneInner}
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
