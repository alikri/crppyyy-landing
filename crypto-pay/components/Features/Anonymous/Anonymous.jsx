import styles from './anonymous.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { anonymousData, anonymousDataBg } from './anonymousData';

export const Anonymous = () => {
  return (
    <div className={styles['anonymous']}>
      <div className={styles['message-wrapper']}>
        <Image
          className={styles['anonymous-message-image']}
          src={anonymousData[0].src}
          width={anonymousData[0].width}
          height={anonymousData[0].height}
          alt={anonymousData[0].alt}
        />
        <Image
          className={styles['anonymous-shadow-image']}
          src={anonymousDataBg.src}
          width={anonymousDataBg.width}
          height={anonymousDataBg.height}
          alt={anonymousDataBg.alt}
        />
      </div>
      <h3>Anonymous payments</h3>
      <p>
        Use allow_anonymous parameter <br /> in{' '}
        <Link className={styles['link']} href={'#'}>
          createInvoice
        </Link>{' '}
        method to give user <br /> an option to remain private
      </p>
    </div>
  );
};
