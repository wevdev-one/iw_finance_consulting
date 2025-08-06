import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./WhatSets.module.scss";
import { Fade } from 'react-reveal';

import image from '../../../assets/images/homepage/sec.webp';
import image1 from '../../../assets/images/homepage/sets/icon1.svg';
import image2 from '../../../assets/images/homepage/sets/icon2.svg';
import image3 from '../../../assets/images/homepage/sets/icon3.svg';
import image4 from '../../../assets/images/homepage/sets/icon4.svg';

const WhatSets = () => {
  const { t } = useTranslation();
  const list = [
    {
      title: t('main.sec.listtitle0'),
      text: t('main.sec.listtext0'),
      icon: image1,
    },
    {
      title: t('main.sec.listtitle1'),
      text: t('main.sec.listtext1'),
      icon: image2,
    },
    {
      title: t('main.sec.listtitle2'),
      text: t('main.sec.listtext2'),
      icon: image3,
    },
    {
      title: t('main.sec.listtitle3'),
      text: t('main.sec.listtext3'),
      icon: image4,
    },
  ]

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} font-48-28`}>{t('main.sec.title')}</div>
        <div className={`${styles.title} font-48-28`}>{t('main.brand')}</div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <Fade bottom key={`sets-${index}`} delay={index * 100 + 1}>
              <div className={styles.item}>
                <img src={item.icon} alt="" className={styles.icon} />
                <div className={`${styles.title} font-21-16`}><Trans>{item.title}</Trans></div>
                <div className={`${styles.title} font-16-14`}><Trans>{item.text}</Trans></div>
              </div>
            </Fade>
          ))}
        </div>
        <Fade bottom delay={500}><img src={image} alt="" className={styles.image} /></Fade>
      </div>
    </div>
  );
};

export default WhatSets;