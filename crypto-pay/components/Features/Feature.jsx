import styles from './features.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Feature = (props) => {
  const {
    title,
    image,
    detailsFirstPart,
    detailsSecondPart,
    link,
    imageBackground,
    titleDetails,
    linkImage,
    titleSecondLine,
    id,
  } = props.feature;

  const { handleClick } = props;

  return (
    <div
      id={`feature-${id}`}
      className={styles['feature']}
      onClick={handleClick}
    >
      <div
        className={styles['feature-img-container']}
        style={{
          background: imageBackground,
        }}
      >
        <Image
          className={styles['feature-img']}
          src={image}
          alt="Crypto Bot"
          width={link ? 394 : 450}
          height={link ? 160 : 450}
        />
        {linkImage && (
          <Link href={link}>
            <Image
              className={styles['feature-img-link']}
              src={linkImage}
              alt="Crypto Bot"
              width={400}
              height={50}
            />
          </Link>
        )}
      </div>
      <div className={styles['feature-content-container']}>
        <h2 className={styles['feature-title']}>
          {title} <br />
          {titleSecondLine}
          <br />
          <span>{titleDetails}</span>
        </h2>
        <p className={styles['feature-details']}>
          {detailsFirstPart} <br /> {detailsSecondPart}{' '}
        </p>
        <button className={styles['feature-button']}>Open API Docs</button>
      </div>
    </div>
  );
};
