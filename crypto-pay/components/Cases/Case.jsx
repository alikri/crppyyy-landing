import styles from './cases.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Case = (props) => {
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
  } = props.case;

  const { handleClick } = props;

  return (
    <div id={`case-${id}`} className={styles['case']} onClick={handleClick}>
      <div
        className={styles['case-img-container']}
        style={{
          background: imageBackground,
        }}
      >
        <Image
          className={styles['case-img']}
          src={image}
          alt="Crypto Bot"
          width={link ? 394 : 450}
          height={link ? 160 : 450}
        />
        {linkImage && (
          <Link href={link}>
            <Image
              className={styles['case-img-link']}
              src={linkImage}
              alt="Crypto Bot"
              width={400}
              height={50}
            />
          </Link>
        )}
      </div>
      <div className={styles['case-content-container']}>
        <h2 className={styles['case-title']}>
          {title} <br />
          {titleSecondLine}
          <br />
          <span>{titleDetails}</span>
        </h2>
        <p className={styles['case-details']}>
          {detailsFirstPart} <br /> {detailsSecondPart}{' '}
        </p>
        <button className={styles['case-button']}>Open API Docs</button>
      </div>
    </div>
  );
};
