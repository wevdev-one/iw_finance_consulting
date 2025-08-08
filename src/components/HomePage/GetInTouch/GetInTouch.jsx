import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./GetInTouch.module.scss";
import { Reveal, Fade } from 'react-reveal';
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/homepage/contact.webp';

const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <Fade bottom>
          <div className={styles.item}>
            <div className={`${styles.title} font-38-28`}>{t('main.seven.title0')}</div>
            <div className={`${styles.title} ${styles.subtitle} font-21-16`}>{t('main.seven.title1')}</div>
            <div className={`${styles.text} font-16-14`}>{t('main.seven.text')}</div>
            <div className={`${styles.btn} mt-btn`}><Button href={`/contact`}>{t('btn.contact')}</Button></div>
          </div>
        </Fade>
        <div className={styles.image}>
          <Reveal effect="zoomInMore"><img src={image} alt="" loading="lazy" /></Reveal>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;