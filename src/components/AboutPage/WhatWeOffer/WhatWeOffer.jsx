import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./WhatWeOffer.module.scss";
import { Fade } from "react-reveal";

import icon from '../../../assets/images/arrow.svg';

const WhatWeOffer = () => {
  const { t } = useTranslation();

  const list = [
    {
      title: t('about.sec.listtitle0'),
      text: t('about.sec.listtext0'),
    },
    {
      title: t('about.sec.listtitle1'),
      text: t('about.sec.listtext1'),
    },
    {
      title: t('about.sec.listtitle2'),
      text: t('about.sec.listtext2'),
    },
    {
      title: t('about.sec.listtitle2'),
      text: t('about.sec.listtext2'),
    },
  ]

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} font-38-28`}>{t('about.sec.title')}</div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <Fade left={index % 2 === 0} right={index % 2 !== 0} delay={index * 100 + 1} key={`offer-${index}`}>
              <div className={styles.item}>
                <div className={`${styles.itemTitle} font-21-16`}><Trans>{item.title}</Trans></div>
                <div className={`${styles.text} font-16-14`}><Trans>{item.text}</Trans></div>
                <img src={icon} alt="" className={styles.icon} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;