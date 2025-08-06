import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./GetStarted.module.scss";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from "react-reveal";

import icon from '../../../assets/images/arrow.svg';

const GetStarted = () => {
  const { t } = useTranslation();
  // const [swiper, setSwiper] = useState({});
  // const [active, setActive] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const list = [
    {
      title: t('main.five.listtitle0'),
      text: t('main.five.listtext0'),
    },
    {
      title: t('main.five.listtitle1'),
      text: t('main.five.listtext1'),
    },
    {
      title: t('main.five.listtitle2'),
      text: t('main.five.listtext2'),
    },
  ]

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.title} font-48-28`}>{t('main.five.title')}</div>
        {isMobile ? 
        (
          <div className={styles.mart}>
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={false}
              // onInit={(e) => { setSwiper(e) }}
              // onSlideChange={(e) => setActive(e.activeIndex)}
            >
              {list.map((item, index) => (
                <SwiperSlide key={`start-${index}`} className={styles.item}>
                  <div className={`${styles.itemTitle} font-21-16`}><Trans>{item.title}</Trans></div>
                  <div className={`${styles.title} font-16-14`}><Trans>{item.text}</Trans></div>
                  <Fade bottom delay={index * 100 + 1}><div className={`${styles.index}`}>{index + 1}</div></Fade>
                  <img src={icon} alt="" className={styles.icon} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
              
        ) : (
            <div className={styles.list}>
              {list.map((item, index) => (
                <div className={styles.item} key={`start-${index}`} >
                  <div className={`${styles.itemTitle} font-21-16`}><Trans>{item.title}</Trans></div>
                  <div className={`${styles.text} font-16-14`}><Trans>{item.text}</Trans></div>
                  <Fade bottom delay={index * 100 + 1}><div className={`${styles.index}`}>{index + 1}</div></Fade>
                  <img src={icon} alt="" className={styles.icon} />
                </div>
              ))}
            </div>
          ) 
        }
      </div>
    </div>
  );
};

export default GetStarted;