import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./BuiltFor.module.scss";
import { Reveal, Fade } from 'react-reveal';
import Button from '../../GlobalComponents/Button/Button';

import image1 from '../../../assets/images/homepage/credit1.webp';
import image2 from '../../../assets/images/homepage/credit2.webp';

const BuiltFor = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.item} ${styles.images}`}>
          <Reveal effect="rotateMinus" duration={1000}>
            <img src={image1} alt="" className={`${styles.image} ${styles.card1}`} loading="lazy" />
          </Reveal>
          <Reveal effect="rotatePlus" duration={1000}>
            <img src={image2} alt="" className={`${styles.image} ${styles.card2}`} loading="lazy" />
          </Reveal>
        </div>
        <div className={styles.item}>
          <Fade left delay={0}><div className={`${styles.title} font-48-28`}>{t('main.four.title')}</div></Fade>
          <Fade left delay={100}><div className={`${styles.text} font-16-14`}>{t('main.four.text0')}</div></Fade>
          <Fade left delay={150}>
            <div className={`${styles.text} font-16-14`}>{t('main.four.text1')}</div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.openacc')}</Button></div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BuiltFor;