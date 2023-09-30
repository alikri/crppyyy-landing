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
  } = props.feature;

  return (
    <div className={styles['feature-sales']}>
      <div
        className={styles['feature-sales-img-container']}
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
      <div className={styles['feature-sales-content-container']}>
        <h2 className={styles['feature-sales-title']}>
          {title} <br />
          {titleSecondLine}
          <br />
          <span>{titleDetails}</span>
        </h2>
        <p className={styles['feature-sales-details']}>
          {detailsFirstPart} <br /> {detailsSecondPart}{' '}
        </p>
        <button className={styles['feature-sales-button']}>
          Open API Docs
        </button>
      </div>
    </div>
  );
};
