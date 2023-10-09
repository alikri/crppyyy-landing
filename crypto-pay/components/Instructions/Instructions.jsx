import styles from './instructions.module.css';
import Link from 'next/link';
import { InstructionsStep } from './InstructionsStep/InstructionsStep';

export const Instructions = ({ darkTheme }) => {
  return (
    <section
      className={`${styles['instructions']}  ${
        darkTheme && styles['dark-white']
      }`}
    >
      <div className={styles['instructions-title-wrapper']}>
        <h2
          className={`${styles['instructions-title']}  ${
            darkTheme && styles['dark-white']
          }`}
        >
          Quick start using{' '}
        </h2>
        <Link className={styles['instructions-link']} href={'#'}>
          {' '}
          Crypto Pay
        </Link>
      </div>
      <InstructionsStep darkTheme={darkTheme} />
    </section>
  );
};
