import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Banner.module.scss";
import { Fade } from 'react-reveal';
import Button from '../../GlobalComponents/Button/Button';

import tel from '../../../assets/images/aboutpage/tel.webp';
import circle1 from '../../../assets/images/aboutpage/circle1.svg';
import circle2 from '../../../assets/images/aboutpage/circle2.svg';
import circle3 from '../../../assets/images/aboutpage/circle3.svg';
import circle4 from '../../../assets/images/aboutpage/circle4.svg';
import list from '../../../assets/images/aboutpage/cryptos.webp';
import text from '../../../assets/images/aboutpage/text.webp';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.item}>
          <Fade left delay={0}><div className={`${styles.title} ${styles.subtitle} font-38-28`}>{t('about.first.title0')}</div></Fade>
          <Fade left delay={50}><div className={`${styles.title} font-38-28`}>{t('main.brand')}</div></Fade>
          <Fade left delay={100}>
            <div className={`${styles.title} ${styles.subtitle} font-23-18`}>{t('about.first.title1')}</div>
            <div className={`${styles.btn} mt-btn`}><Button>{t('btn.openacc')}</Button></div>
          </Fade>
        </div>
        <div className={`${styles.item} ${styles.images}`}>
          <Fade top><img src={tel} alt="" className={`${styles.tel}`} loading="lazy" /></Fade>
          <div className={styles.circle}>
            <img src={circle1} alt="" className={`${styles.circle0} ${styles.circle1}`} loading="lazy" />
            <img src={circle2} alt="" className={`${styles.circle0} ${styles.circle2}`} loading="lazy" />
            <img src={circle3} alt="" className={`${styles.circle0} ${styles.circle3}`} loading="lazy" />
            <img src={circle4} alt="" className={`${styles.circle0} ${styles.circle4}`} loading="lazy" />
            <Fade top delay={500}>
              <div className={styles.circletext}><img src={text} alt="" loading="lazy" /></div>
            </Fade>
          </div>
          <Fade bottom delay={3000}>
            <div className={`${styles.crypto}`} >
              <img src={list} alt="" loading="lazy" />
            </div>
          </Fade>
        </div>
        <div className={`${styles.item} ${styles.itemLast}`}>
          <Fade right delay={100}><div className={`${styles.text} font-16-14`}>{t('about.first.text0')}</div></Fade>
          <Fade right delay={150}><div className={`${styles.text} font-16-14`}>{t('about.first.text1')}</div></Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;