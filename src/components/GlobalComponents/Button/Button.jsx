import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from './Button.module.scss';
// import icon from '../../../assets/images/icon-cab.svg';

const Button = ({ children, login, href, event, header, customLink, green }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  if (customLink) {
    return (
      <a href={customLink} className={`${styles.button}`} target="_blank" without rel="noreferrer">
        <span>{children}</span>
      </a>
    );
  }

  if (event) {
    return (
      <div
        onClick={event}
        className={`${styles.button} ${header ? styles.header : ''} ${green ? styles.green : ''} no-select`}
      >
        {children}
      </div>
    );
  }

  return (
    <Link
      className={`${styles.button} ${header ? styles.header : ''} ${green ? styles.green : ''} no-select`}
      to={!href
        ? `${process.env.REACT_APP_CABINET_URL}/${lang}/${login ? 'login' : 'register'}`
        : `/${lang}/${href}`
      }
    >
      {/* {header && <img src={icon} alt="icon" />} */}
      {children
        ? children
        : t('btn.start')
      }
    </Link>
  );
};

export default Button;