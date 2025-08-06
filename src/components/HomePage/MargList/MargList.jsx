import React from "react";
import { Trans, useTranslation } from "react-i18next";
import styles from "./MargList.module.scss";
import { Fade } from 'react-reveal';

const MargList = () => {
  const { t } = useTranslation();
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
  ]

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <div className={styles.list}>
          {list.map((item, index) => (
            <Fade bottom key={`mlist-${index}`} delay={index * 100 + 1}>
              <div className={styles.item}>
                <div className={`${styles.title} font-21-16`}><Trans>{item.title}</Trans></div>
                <div className={`${styles.text} font-16-14`}><Trans>{item.text}</Trans></div>
              </div>
            </Fade>
          ))}
        </div>
        {/* <Fade bottom delay={500}><img src={image} alt="" className={styles.image} /></Fade> */}
      </div>
    </div>
  );
};

export default MargList;