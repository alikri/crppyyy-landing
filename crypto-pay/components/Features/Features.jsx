import styles from './features.module.css';
import { featuresData } from './features-data';
import { Feature } from './Feature';
import { useState, useEffect, useRef } from 'react';

export const Features = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [sliderCount, setSliderCount] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(null);

  // const handleFeatureContainerClick = (e) => {
  //   let clickedElement = e.target;

  //   while (clickedElement && !clickedElement.id.startsWith('feature-')) {
  //     clickedElement = clickedElement.parentElement;
  //   }

  //   if (clickedElement) {
  //     return clickedElement.id.split('-')[1];
  //   }
  // };

  function showSlide() {
    if (wrapperRef.current) {
      const sliderHeight = wrapperRef.current.offsetHeight;

      setSliderHeight(sliderHeight);
      setCarouselHeight(sliderHeight * featuresData.length + 'px');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', showSlide);
    showSlide();
    return () => window.removeEventListener('resize', showSlide);
  }, []);
  //   console.log(e.target.id, 'target.id');
  //   const id =
  //     e.target.id && !e.target.id.startsWith('feature-')
  //       ? e.target.id
  //       : handleFeatureContainerClick(e);
  //   console.log(id);
  //   if (id === '1') {
  //     if (activeFeature === 2) {
  //       setTransition('transition-up-from-second');
  //       setTimeout(() => {
  //         setPosition('0px');
  //         setTransition('');
  //         setActiveFeature(1);
  //       }, 1000);
  //     } else if (activeFeature === 3) {
  //       setTransition('transition-up-from-bottom');
  //       setTimeout(() => {
  //         setPosition('0px');
  //         setTransition('');
  //         setActiveFeature(1);
  //       }, 1000);
  //     } else {
  //       setTransition('transition-down-from-first');
  //       setActiveFeature(2);
  //       setTimeout(() => {
  //         setPosition('-488px');
  //         setTransition('');
  //       }, 1000);
  //     }
  //   } else if (id === '2') {
  //     console.log(activeFeature, 'activeFeature');
  //     if (activeFeature === 1) {
  //       setTransition('transition-down-from-first');
  //       setActiveFeature(2);
  //       setTimeout(() => {
  //         setPosition('-488px');
  //         setTransition('');
  //       }, 1000);
  //     } else if (activeFeature === 3) {
  //       setActiveFeature(2);
  //       setTransition('transition-up-from-last');
  //       setTimeout(() => {
  //         setPosition('-488px');
  //         setTransition('');
  //       }, 1000);
  //     } else if (activeFeature === 2 && e.target.id === 'feature-2') {
  //       console.log('here');
  //       setActiveFeature(1);
  //       setTransition('transition-up-from-second');
  //       setTimeout(() => {
  //         setPosition('0px');
  //         setTransition('');
  //       }, 1000);
  //     } else {
  //       setActiveFeature(3);
  //       setTransition('transition-down-from-second');
  //       setTimeout(() => {
  //         setPosition('-976px');
  //         setTransition('');
  //       }, 1000);
  //     }
  //   } else if (id === '3') {
  //     if (activeFeature === 2) {
  //       setTransition('transition-down-from-second');
  //       setActiveFeature(3);
  //       setTimeout(() => {
  //         setPosition('-976px');
  //         setTransition('');
  //       }, 1000);
  //     } else if (activeFeature === 1) {
  //       setTransition('transition-down-from-top');
  //       setActiveFeature(3);
  //       setTimeout(() => {
  //         setPosition('-976px');
  //         setTransition('');
  //       }, 1000);
  //     } else {
  //       setTransition('transition-up-from-last');
  //       setActiveFeature(2);
  //       setTimeout(() => {
  //         setPosition('-488px');
  //         setTransition('');
  //       }, 1000);
  //     }
  //   }
  // };

  const handleClick = () => {
    const newSliderCount = sliderCount + 1;
    if (newSliderCount >= featuresData.length) {
      setSliderCount(0);
      rollSlider(0);
    } else {
      setSliderCount(newSliderCount);
      rollSlider(newSliderCount);
    }
  };

  function rollSlider(count) {
    carouselRef.current.style.transform = `translateY(${
      -count * sliderHeight
    }px)`;
  }

  return (
    <section className={styles['features']}>
      <div ref={wrapperRef} className={styles['features-wrapper']}>
        <div ref={carouselRef} className={styles['features-carousel']}>
          {featuresData.map((feature, index) => (
            <Feature
              key={`feature${index}`}
              feature={feature}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      <div className={styles['features-slider']}>
        <div className={styles['slider-top-number']}>0{sliderCount + 1}</div>
        <div
          id={0}
          className={`${styles['slider']}`}
          style={
            sliderCount === 0
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div
          id={1}
          className={`${styles['slider']}`}
          style={
            sliderCount === 1
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div
          id={2}
          className={styles['slider']}
          style={
            sliderCount === 2
              ? { background: '#41A4DF' }
              : { background: 'rgba(255, 255, 255, 0.24)' }
          }
        ></div>
        <div className={styles['slider-bottom-number']}>03</div>
      </div>
    </section>
  );
};
