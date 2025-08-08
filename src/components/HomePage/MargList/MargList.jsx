import React, { useEffect, useRef } from 'react';
import { Trans, useTranslation } from "react-i18next";
import styles from "./MargList.module.scss";
import { Fade } from 'react-reveal';

const MargList = () => {
  const { t } = useTranslation();
  const textPathRef = useRef(null);
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

  useEffect(() => {
    let offset = 0;
    const speed = 0.025;

    const animate = () => {
      if (textPathRef.current) {
        offset += speed;
        if (offset > 100) offset = 0;
        textPathRef.current.setAttribute('startOffset', `${offset}%`);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

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
        <div className={styles.marqueeWrapper}>
          <svg viewBox="0 0 3000 200" className={styles.curvesvg} preserveAspectRatio="xMidYMid meet">
            <defs>
              <path
                id="textPath"
                d="M 0 100 Q 750 0, 1500 100 T 3000 100"
                fill="transparent"
              />
            </defs>

            {/* background stroke behind text (×2 wider) */}
            <path
              d="M 0 100 Q 750 0, 1500 100 T 3000 100"
              stroke="#f5f5f5"
              strokeWidth="80"  // <-- збільшено у 2 рази
              fill="none"
            />

            <text className={styles.marqueetext} 
              style={{
                fill: '#253428',
                fontSize: '40px',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
              <textPath href="#textPath" ref={textPathRef}>
                {'\u2022 Your Crypto \u2022 Your terms '.repeat(50)}
              </textPath>
            </text>
          </svg>
        </div>
        {/* <Fade bottom delay={500}><img src={image} alt="" className={styles.image} /></Fade> */}
      </div>
    </div>
  );
};

export default MargList;