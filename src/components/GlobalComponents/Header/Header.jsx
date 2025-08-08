import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";
import Dropdown from 'react-dropdown';
import Cookies from "js-cookie";
import logo from '../../../assets/images/logo.svg';
import iconLang from '../../../assets/images/icon-lang.svg';
// import linkIcon from '../../../assets/images/linkItem.svg';
import iconBurger from '../../../assets/images/burger.svg';
import iconBurgerOpen from '../../../assets/images/burger-open.svg';
import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const setLocale = (lang) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${_.last(pathname.split('/'))}`);
  };

  const { t, i18n } = useTranslation();

  const languages = [
      { value: 'en', label: 'EN' },
      { value: 'nl', label: 'NL' },
  ]

  const storedLang = Cookies.get("i18next");

  const [currentLang, setCurrentLang] = useState(storedLang || 'en');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (storedLang && storedLang !== currentLang) {
        setCurrentLang(storedLang);
        i18n.changeLanguage(storedLang);
    }
    // eslint-disable-next-line
    document.body.setAttribute('dir', storedLang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('class', `${storedLang}`);
  }, [storedLang]);  

  const handleChangeLang = (selectedLang) => {
      setCurrentLang(selectedLang.value);
      i18n.changeLanguage(selectedLang.value);
      Cookies.set("i18next", selectedLang.value);
      navigate(`/${selectedLang.value}/${_.last(pathname.split('/'))}`);
  };

  useEffect(() => {
    const langs = _.dropRight(i18n.options.supportedLngs);
    if (lang === undefined || !langs.includes(lang)) {
      setLocale("en");
    } else {
      setLocale(lang);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <div className={styles.top}>
            <Link to={`/${storedLang}/`}>
              <img src={logo} alt="Logo" className={styles.headerLogo} />
            </Link>

            <div className={`${styles.itemBlock} ${styles.marl}`}>
              <Link to={`/${storedLang}/about`}>
                {t('header.about')}
              </Link>
            </div>
            <div className='mob_only'>
              <div className={`${styles.itemBlock}`}>
              <a  
                href={`/${storedLang}/terms`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.terms')}
              </a>
              <a
                href={`/${storedLang}/policy`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.privacy')}
              </a>
              <a  
                href={`/${storedLang}/cookie`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.cookie')}
              </a>
              </div>
            </div>
            <div className={styles.itemBlock}>
              <div className={`${styles.mrl} ${styles.lineItem}`}><Button login header></Button></div>
            </div>
          </div>
          <div className={styles.bot}>
            <div className={styles.itemBlock}>
              <a  
                href={`/${storedLang}/terms`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.terms')}
              </a>
              <a
                href={`/${storedLang}/policy`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.privacy')}
              </a>
              <a  
                href={`/${storedLang}/cookie`}
                target="_blank"
                className={styles.navTitle}
                rel="noreferrer"
              >
                {t('footer.docs.cookie')}
              </a>
            </div>
            <div className={`${styles.lineItem} desk_only`}>
                <img src={iconLang} alt="Logo" className={styles.logoLang} />
                <Dropdown
                  options={languages}
                  placeholder="EN"
                  onChange={handleChangeLang}
                  value={languages.find(lang => lang.value === currentLang)}
                />
            </div>
          </div>
        </div>
        <div className={styles.mobileContent}>
          <a href={`/${storedLang}/`} className={styles.headerLink}>
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </a>
          {/* <div className={`${styles.lineItem} ${styles.langItem}`}>
            <img src={iconLang} alt="Logo" className={styles.logoLang} />
            <Dropdown
              options={languages}
              placeholder="EN"
              onChange={handleChangeLang}
              value={languages.find(lang => lang.value === currentLang)}
            />
          </div> */}
          <div className={`${menuOpen ? styles.burgerOpen : ''} ${styles.burger}`} onClick={toggleMenu}>
            <img src={iconBurger} alt='' className={`${styles.burgerIcon}`} />
            <img src={iconBurgerOpen} alt='' className={`${styles.burgerIcon} ${styles.burgerIconActive}`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;