import styles from './instructionsStep.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { instructionsData } from './instructionsData';
import { useState, useEffect } from 'react';

export const InstructionsStep = ({ darkTheme }) => {
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
    <>
      {instructionsData.map((step, index) => {
        return (
          <div key={`step${index}${step.step}`} className={styles['step']}>
            <div
              className={styles['step-info-wrapper']}
              style={{
                order: windowSize.width < 1100 ? 2 : step.infoOrder,
                paddingLeft:
                  !step.infoOrder === 2 || windowSize.width < 1100
                    ? '0px'
                    : '122px',
              }}
            >
              <h2
                className={`${styles['step-info-number']}  ${
                  darkTheme && styles['dark-white-bg']
                }`}
              >
                {step.step}
              </h2>
              <h3
                className={`${styles['step-info-title']}  ${
                  darkTheme && styles['dark-white']
                }`}
              >
                {step.title}
              </h3>
              {step.description && (
                <p
                  className={`${styles['step-info-details']}  ${
                    darkTheme && styles['dark-white80']
                  }`}
                >
                  {step.description}
                </p>
              )}
              {step.list === 'ol' ? (
                <ol>
                  {step.listPoints.map((point) => (
                    <li
                      className={`${darkTheme && styles['dark-white80']}`}
                      key={point.linkText}
                    >
                      {point.text && step.orderText === 1 && (
                        <>
                          {point.text}{' '}
                          <Link className={styles['link']} href="#">
                            {point.linkText}
                          </Link>
                        </>
                      )}
                      {point.text && step.orderText === 2 && (
                        <>
                          <Link className={styles['link']} href="#">
                            {point.linkText}
                          </Link>
                          {point.text}
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul>
                  {step.listPoints.map((point) => (
                    <li
                      key={point.linkText}
                      className={`${styles['ul-point']} ${
                        darkTheme && styles['dark-white80']
                      }`}
                    >
                      {point.text && step.orderText === 1 && (
                        <>
                          {point.text}{' '}
                          <Link className={styles['link']} href="#">
                            {point.linkText}
                          </Link>
                        </>
                      )}
                      {point.text && step.orderText === 2 && (
                        <>
                          <Link className={styles['link']} href="#">
                            {point.linkText}
                          </Link>{' '}
                          {point.text}
                        </>
                      )}
                      {!point.text && (
                        <Link className={styles['link']} href="#">
                          {point.linkText}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className={styles['step-image-wrapper']}
              style={{
                order: windowSize.width < 1100 ? 1 : step.imageOrder,
                background: step.background,
              }}
            >
              <Image
                className={styles[`step-image${step.step}`]}
                src={step.src}
                width={500}
                height={400}
                alt="step example"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
