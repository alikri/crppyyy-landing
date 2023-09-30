import styles from './features.module.css';
import { featuresData } from './features-data';
import { Feature } from './Feature';
import { useState } from 'react';

export const Features = () => {
  const [transtion, setTransition] = useState(null);
  const [position, setPosition] = useState('0px');
  const [activeFeature, setActiveFeature] = useState(1);

  const handleClick = (e) => {
    const id = e.target.id;
    if (id === '1') {
      if (activeFeature === 2) {
        setTransition('transition-up-from-second');
      } else {
        setTransition('transition-up-from-bottom');
      }
      setActiveFeature(1);
      setTimeout(() => {
        setPosition('0px');
        setTransition('');
      }, 2000);
    } else if (id === '2') {
      if (activeFeature === 1) {
        setTransition('transition-down-from-first');
      } else {
        setTransition('transition-up-from-last');
      }
      setActiveFeature(2);
      setTimeout(() => {
        setPosition('-488px');
        setTransition('');
      }, 2000);
    } else if (id === '3') {
      if (activeFeature === 2) {
        setTransition('transition-down-from-second');
      } else {
        setTransition('transition-down-from-top');
      }
      setActiveFeature(3);
      setTimeout(() => {
        setPosition('-976px');
        setTransition('');
      }, 2000);
    }
  };

  return (
    <section className={styles['features']}>
      <div className={styles['features-wrapper']}>
        <div
          className={`${styles['features-carousel']} ${
            transtion && styles[transtion]
          }`}
          style={{ top: position }}
        >
          {featuresData.map((feature, index) => (
            <Feature key={`feature${index}`} feature={feature} />
          ))}
        </div>
      </div>
      <div className={styles['features-slider']}>
        <div className={styles['slider-top-number']}>01</div>
        <div
          id={1}
          onClick={(e) => handleClick(e)}
          className={`${styles['slider']}`}
          style={
            activeFeature === 1
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div
          id={2}
          onClick={(e) => handleClick(e)}
          className={`${styles['slider']}`}
          style={
            activeFeature === 2
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div
          id={3}
          onClick={(e) => handleClick(e)}
          className={styles['slider']}
          style={
            activeFeature === 3
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div className={styles['slider-bottom-number']}>03</div>
      </div>
    </section>
  );
};
