import styles from './cases.module.css';
import { casesData } from './casesData';
import { Case } from './Case';
import { useState, useEffect, useRef } from 'react';

export const Cases = () => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [sliderCount, setSliderCount] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(null);
  const [carouselWidth, setCarouselWidth] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  function updateWindowSizes() {
    const currentWindowWidth = window.innerWidth;
    setWindowWidth(currentWindowWidth);

    if (currentWindowWidth <= 970) {
      if (wrapperRef.current) {
        const sliderWidth = wrapperRef.current.offsetWidth;

        setSliderWidth(sliderWidth);
        setCarouselWidth(sliderWidth * casesData.length + 'px');
      }
    } else {
      if (wrapperRef.current) {
        const sliderHeight = wrapperRef.current.offsetHeight;

        setSliderHeight(sliderHeight);
        setCarouselHeight(sliderHeight * casesData.length + 'px');
      }
    }

    if (sliderCount >= casesData.length) {
      setSliderCount(0);
      rollSlider(0);
    } else {
      setSliderCount(sliderCount);
      rollSlider(sliderCount);
    }
  }

  function showSlide() {
    updateWindowSizes();
  }

  useEffect(() => {
    updateWindowSizes();

    window.addEventListener('resize', showSlide);
    showSlide();
    return () => window.removeEventListener('resize', showSlide);
  }, []);

  const handleClick = () => {
    const newSliderCount = sliderCount + 1;
    if (newSliderCount >= casesData.length) {
      setSliderCount(0);
      rollSlider(0);
    } else {
      setSliderCount(newSliderCount);
      rollSlider(newSliderCount);
    }
  };

  function rollSlider(count) {
    if (windowWidth <= 970) {
      carouselRef.current.style.transform = `translateX(${
        -count * sliderWidth
      }px)`;
    } else {
      carouselRef.current.style.transform = `translateY(${
        -count * sliderHeight
      }px)`;
    }
  }

  return (
    <section className={styles['cases']}>
      <div ref={wrapperRef} className={styles['cases-wrapper']}>
        <div ref={carouselRef} className={styles['cases-carousel']}>
          {casesData.map((currentCase, index) => (
            <Case
              key={`case${index}`}
              case={currentCase}
              handleClick={handleClick}
              windowWidth={windowWidth}
            />
          ))}
        </div>
      </div>
      <div className={styles['cases-slider']}>
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
