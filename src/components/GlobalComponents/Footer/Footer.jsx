import React from 'react';
import { useTranslation, Trans } from "react-i18next";
import { useParams } from "react-router-dom";
import logo from '../../../assets/images/logo.svg';
import imageD from '../../../assets/images/footerd.webp';
import imageM from '../../../assets/images/footerm.webp';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  const { hostname } = document.location;
  const { lang } = useParams();
  
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles.leftSide}>
          <div className={styles.logoWrap}>
            <img loading="lazy" src={logo} alt="Logo" className={styles.headerLogo} />
          </div>
          <div className={styles.footerNav}>
            <div>
              {/* <div className={`${styles.itemBlock} ${styles.navTitle}`}>
                address
              </div> */}
              <div className={styles.itemBlock}>
                <a href={`mailto:support@${hostname}`} className={styles.navTitle}>
                  support@{hostname}
                </a>
              </div>
              <div className={styles.itemBlock}>
                <a href="tel:+442038086424" className={styles.navTitle}>+442038086424</a>
              </div>
            </div>
          </div>
          <div className={styles.itemBlock}>
            <a  
              href={`/${lang}/terms`}
              target="_blank"
              className={styles.navTitle}
              rel="noreferrer"
            >
              {t('footer.docs.terms')}
            </a>
            <a
              href={`/${lang}/policy`}
              target="_blank"
              className={styles.navTitle}
              rel="noreferrer"
            >
              {t('footer.docs.privacy')}
            </a>
            <a  
              href={`/${lang}/cookie`}
              target="_blank"
              className={styles.navTitle}
              rel="noreferrer"
            >
              {t('footer.docs.cookie')}
            </a>
          </div>
        </div>
        <img src={imageD} loading='lazy' alt='' className={`${styles.image} desk_only`} />
        <div className={styles.rightSide}>
          {/* <div className={`${styles.navTitleBolder}`}>{t('footer.disclaimer.title0')}</div> */}
          <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text1')}</p></Trans>
          {/* <div className={`${styles.navTitleBolder} ${styles.mart}`}>{t('footer.disclaimer.title1')}</div> */}
          {/* <Trans><p className={styles.navTitle}>{t('footer.disclaimer.text2')}</p></Trans> */}
          <Trans><p className={styles.navTitle}>{t('footer.rights')}</p></Trans>
        </div>
        <img src={imageM} loading='lazy' alt='' className={`${styles.image} mob_only`} />
      </div>
    </footer>
  );
};

export default Footer;