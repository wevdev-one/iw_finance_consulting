import React, { useState } from "react";
import styles from './Form.module.scss';
import { Trans, useTranslation } from "react-i18next";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Select from 'react-select'
import axios from "axios";

import image from '../../assets/images/footerd.webp';

const Form = () => {
    const { t } = useTranslation();
    // const [countryCode, setCountryCode] = useState("us");
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [process, setProcess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // checkbox: false,
        message: ''
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'error';
        }
        if (!formData.email.trim() || (!/\S+@\S+\.\S+/.test(formData.email))) {
            newErrors.email = 'error';
        } 
        // if (!formData.checkbox) {
        //     newErrors.checkbox = 'error';
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // const handlePhoneChange = (value) => {
    //     setFormData({
    //         ...formData,
    //         phone: value,
    //     });
    // };

    const handleSubmit =  async(e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (validate()) {
            setProcess(true);
            try {
                const data = await axios.post('https://civbt.xyz/api/bot/LyfnsMgZd6', formData);
                setProcess(false);
                if (data.status === 200) {
                    setShowPopup(true);
                    clearForm();
                } else {
                    throw ({ message: 'Something went wrong. Try again.' })
                }
            } catch (error) {
                setProcess(true);
                alert(`${error.message}`)
            }
        }
    };

    const clearForm = () => {
        setFormData({
          name: '',
          email: '',
        //   select: '',
        //   phone: '',
        //   checkbox: false,
          message: ''
        });
        setIsSubmitted(false);
      };

    const handleClosePopup = () => {
        setShowPopup(false);
        clearForm();
    };

    // useEffect(() => {
    //     const fetchUserCountry = async () => {
    //       try {
    //         const response = await axios.get("https://ipinfo.io/json");
    //         const country = response.data.country.toLowerCase(); 
    //         setCountryCode(country);
    //       } catch (error) {
    //         console.error("Unable to determine country:", error);
    //       }
    //     };
    
    //     fetchUserCountry();
    //   }, []);

    return (
        <section className={`${styles.container}`}>
            {process && (
                <div className={styles.popupWrap}>
                    <div className={styles.popupContent}>
                        <div className={styles.popupText}>
                            <Trans>
                                {t('form.process')}
                            </Trans>
                        </div>
                    </div>
                </div>
            )}
            {showPopup && (
                <div className={styles.popupWrap} onClick={handleClosePopup}>
                    <div onClick={handleClosePopup} className={styles.close}></div>
                    <div className={styles.popupContent}>
                        <div className={styles.popupImg}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none">
                                <path d="M11.625 22.8431L0.6875 11.9034L3.77844 8.8125L11.625 16.6569L28.2172 0.0625L31.3125 3.15781L11.625 22.8431Z" fill="#FFF" />
                            </svg>
                        </div>
                        <div className={styles.popupText}>
                            <Trans>
                                {t('form.success')}
                            </Trans>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.wrap}>
                <div className={`${styles.formWrap} container`}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <a href="/" className={styles.back}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="8" viewBox="0 0 22 8" fill="none">
                                <path d="M0.646446 4.35356C0.451185 4.1583 0.451185 3.84171 0.646446 3.64645L3.82843 0.464469C4.02369 0.269207 4.34027 0.269207 4.53553 0.464469C4.7308 0.659731 4.7308 0.976314 4.53553 1.17158L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53554C4.34027 7.7308 4.02369 7.7308 3.82843 7.53554L0.646446 4.35356ZM22 4L22 4.5L1 4.5L1 4L1 3.5L22 3.5L22 4Z" fill="#282828"/>
                            </svg>
                            {t('form.back')}
                        </a>
                        <img src={image} loading='lazy' alt='' className={`${styles.image} desk_only`} />
                        <div className={styles.inputs}>
                            <div className={styles.group}>
                                <label htmlFor="name" className={styles.labelTitle}>{t('form.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('form.name.placeholder')}
                                    className={`${styles.input} ${isSubmitted && errors.name && styles.error}`}
                                />
                                
                            </div>
                            
                            <div className={styles.group}>
                                <label htmlFor="email" className={styles.labelTitle}>{t('form.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${styles.input} ${isSubmitted && errors.email && styles.error}`}
                                    placeholder={t('form.email.placeholder')}
                                />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="message" className={styles.labelTitle}>{t('form.message')}</label>
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${styles.input} ${styles.textarea} ${isSubmitted && errors.message && styles.error}`}
                                    placeholder={t('form.message.placeholder')}
                                />
                            </div>
                            
                            {/* <div className={styles.group}>
                                <PhoneInput
                                    country={countryCode}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    className={`${styles.phone}`}
                                    inputClass={`${styles.inputClass} ${isSubmitted && errors.phone && styles.error}`}
                                    buttonClass={styles.buttonClass}
                                    dropdownClass={styles.dropdownClass}
                                    searchClass={styles.searchClass}
                                />
                            </div>

                            <div className={styles.checkwrap}>
                                <div className={styles.checkboxWrap}>
                                    <label className={`${styles.label} ${isSubmitted && errors.checkbox && styles.error}`}>
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            checked={formData.checkbox}
                                            onChange={handleChange}
                                        />
                                        {t('form.agree')}
                                    </label>
                                </div>
                            </div> */}
                        </div>

                        <div className={styles.submit}>
                            <button type="submit" className={styles.button}>
                                {t('btn.submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;