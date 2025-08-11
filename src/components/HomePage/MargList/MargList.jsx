import { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./MargList.module.scss";
import { Fade } from 'react-reveal';

import imaged from '../../../assets/images/homepage/line.webp';
import image from '../../../assets/images/homepage/lined.webp';

const MargList = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imageSrc = image;
  if (windowWidth > 1920) {
    imageSrc = imaged;
  }
  
  const list = [
    {
      title: t('main.third.listtitle0'),
      text: t('main.third.listtext0'),
    },
    {
      title: t('main.third.listtitle1'),
      text: t('main.third.listtext1'),
    },
    {
      title: t('main.third.listtitle2'),
      text: t('main.third.listtext2'),
    },
  ];

  return (
    <div className={styles.wrap}>
      <img src={imageSrc} alt='' className={`${styles.bg} desk_only`} />
      <div className={`${styles.container} container`}>
        <div className={`${styles.sing} mob_only`}>Your Crypto. Your terms.</div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <Fade bottom key={`mlist-${index}`} delay={index * 100 + 1}>
              <div className={styles.item}>
                <div className={`${styles.title} font-21`}><Trans>{item.title}</Trans></div>
                <div className={`${styles.text} font-16`}><Trans>{item.text}</Trans></div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MargList;