import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import { Reveal, Fade } from 'react-reveal';
import Button from '../../GlobalComponents/Button/Button';

import image1 from '../../../assets/images/homepage/first1.webp';
import image2 from '../../../assets/images/homepage/first2.webp';
import image3 from '../../../assets/images/homepage/first3.webp';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <Fade left delay={0}><div className={`${styles.title} font-48-28`}>{t('main.brand')}</div></Fade>
          <Fade left delay={50}><div className={`${styles.title} ${styles.subtitle} font-23-18`}>{t('main.first.title')}</div></Fade>
          <Fade left delay={100}><div className={`${styles.text} font-16-14`}>{t('main.first.text0')}</div></Fade>
          <Fade left delay={150}>
            <div className={`${styles.text} font-16-14`}>{t('main.first.text1')}</div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.openacc')}</Button></div>
          </Fade>
        </div>
        <div className={`${styles.item} ${styles.images}`}>
          <Fade top><img src={image1} alt="" className={`${styles.image} ${styles.image1}`} loading="lazy" /></Fade>
          <Reveal effect="custom-rotate" duration={1000}><img src={image2} alt="" className={`${styles.image} ${styles.image2}`} loading="lazy" /></Reveal>
          <Reveal effect="zoomIn"><img src={image3} alt="" className={`${styles.image} ${styles.image3}`} loading="lazy" /></Reveal>
        </div>
      </div>
    </div>
  );
};

export default Banner;