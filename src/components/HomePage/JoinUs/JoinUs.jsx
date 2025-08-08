import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./JoinUs.module.scss";
import { Fade } from 'react-reveal';
import Button from '../../GlobalComponents/Button/Button';

import image from '../../../assets/images/homepage/join.webp';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
          <div>
            <Fade left delay={0}><div className={`${styles.title} font-92-38`}><Trans>{t('main.six.title0')}</Trans></div></Fade>
            <Fade left delay={100}><div className={`${styles.title} font-60-38`}>{t('main.six.title1')}</div></Fade>
          </div>
          <div className={styles.center}><img src={image} alt="" className={`${styles.image} ${styles.spin}`} loading="lazy" /></div>
          <div className={styles.last}>
            <div className={`${styles.text} font-16-14`}>{t('main.six.text')}</div>
            <div className={`${styles.btn} mt-btn desk_only`}><Button>{t('btn.openacc')}</Button></div>
          </div>
      </div>
    </div>
  );
};

export default JoinUs;