import styles from './instructions.module.css';
import Link from 'next/link';
import { InstructionsStep } from './InstructionsStep/InstructionsStep';

export const Instructions = () => {
  return (
    <section className={styles['instructions']}>
      <div className={styles['instructions-title-wrapper']}>
        <h2>Quick start using </h2>
        <Link className={styles['link']} href={'#'}>
          {' '}
          Crypto Pay
        </Link>
      </div>
      <InstructionsStep />
    </section>
  );
};
