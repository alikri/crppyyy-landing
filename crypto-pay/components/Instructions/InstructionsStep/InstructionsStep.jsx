import styles from './instructionsStep.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { instructionsData } from './instructionsData';

export const InstructionsStep = () => {
  return (
    <>
      {instructionsData.map((step, index) => {
        return (
          <div key={`step${index}${step.step}`} className={styles['step']}>
            <div
              className={styles['step-info-wrapper']}
              style={{
                order: step.infoOrder,
                paddingLeft: step.infoOrder === 2 ? '122px' : '0px',
              }}
            >
              <h2>{step.step}</h2>
              <h3>{step.title}</h3>
              {step.description && <p>{step.description}</p>}
              {step.list === 'ol' ? (
                <ol>
                  {step.listPoints.map((point) => (
                    <li key={point.linkText}>
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
                    <li key={point.linkText} className={styles['ul-point']}>
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
              style={{ order: step.imageOrder, background: step.background }}
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
