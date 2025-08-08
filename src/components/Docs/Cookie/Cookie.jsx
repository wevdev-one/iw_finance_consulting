import React from "react";
import styles from "./Cookie.module.scss";

const Cookie = () => {

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <h1>COOKIE POLICY</h1>
        <h3>Last updated: July 28, 2023</h3>
        <p>At IW Finance Consulting ("we", "us", or "our"), we use cookies to enhance your browsing experience, improve our website functionality, and deliver personalized content. This Cookie Policy explains what cookies are, how we use them, and your options regarding their use.</p>
        <h2>What Are Cookies?</h2>
        <p>Cookies are small data files stored on your device (computer, smartphone, or tablet) when you visit a website. They help us recognize your device, remember your preferences, and analyze how you interact with our site to enhance your overall experience.</p>
        <p>While cookies improve functionality and usability, you can choose to restrict or disable them—though doing so may affect the performance of certain features on our site.</p>
        <h2>Why We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Distinguish you from other users</li>
          <li>Provide secure login access</li>
          <li>Personalize your experience</li>
          <li>Analyze and improve website performance</li>
          <li>Track marketing effectiveness</li>
        </ul>
        <p>These cookies are essential for delivering a seamless, tailored, and secure user experience.</p>
        <h2>Types of Cookies We Use</h2>
        <ol>
          <li><strong>Strictly Necessary Cookies</strong>
          These are essential for the website to function properly. They allow you to log into secure areas and complete transactions. Typically, these cookies expire once your session ends, though some may persist to retain basic settings.</li>
          <li><strong>Performance Cookies</strong>
          These cookies help us understand how visitors navigate our site. They track metrics like page visits and session duration, helping us optimize performance and user experience. For instance, they eliminate the need to log in again when visiting different pages.</li>
          <li><strong>Functionality Cookies</strong>
          Functionality cookies recognize you when you return to the site. They allow us to remember your preferences and customize content based on your past interactions.</li>
          <li><strong>Targeting Cookies</strong>
          These cookies collect information about your visit—pages viewed, links clicked, and time spent on site. They help us deliver relevant content and tailor marketing efforts to your interests.</li>
          <li><strong>Session Cookies:</strong> Most necessary, performance, and some functionality cookies expire once you leave the site.</li>
          <li><strong>Persistent Cookies:</strong> Some performance, functionality, and targeting cookies remain on your device to remember your preferences for future visits.</li>
          <li><strong>Third-Party Cookies</strong>
          Some cookies on our website are set by third parties providing services on our behalf (e.g., analytics, advertising, or social media tools). These cookies help us:
            <ul>
              <li>Understand how visitors interact with our site</li>
              <li>Deliver customized content based on user behavior</li>
              <li>Track referrals and affiliate partnerships</li>
            </ul>
          </li>
        </ol>
        <h2>Use of Third-Party Cookies</h2>
        <p>We work with trusted partners to set cookies for:</p>
        <ul>
          <li><b>Analytics</b> (e.g., Google Analytics): Track visitor behavior such as time on site and popular pages.</li>
          <li><b>Testing:</b> Ensure consistent experiences while testing new features or layouts.</li>
          <li><b>Affiliate Tracking:</b> Identify when users arrive via our partners and allow rewards or promotions to be correctly applied.</li>
        </ul>
        <p>These third-party cookies are essential for optimizing our website, marketing efforts, and service delivery.</p>
        <h2>What Happens If I Don’t Consent to Cookies?</h2>
        <p>You can manage or block cookies directly through your browser settings. However, please note that disabling cookies may result in reduced website functionality and a less personalized user experience.</p>
        <h2>How to Disable Cookies</h2>
        <p>You can delete or disable cookies via your browser’s settings. While each browser is slightly different, you can typically find cookie controls under the <b>Settings</b> or <b>Privacy</b> tabs. Clearing your cookies will trigger our cookie consent banner when you revisit the site.</p>
        <p>Instructions for managing cookies in popular browsers:</p>
        <ul>
          <li><b>Google Chrome</b></li>
          <li><b>Microsoft Edge</b></li>
          <li><b>Mozilla Firefox</b></li>
          <li><b>Microsoft Internet Explorer</b></li>
          <li><b>Opera</b></li>
          <li><b>Apple Safari</b></li>
        </ul>
        <p>Please be aware that disabling cookies may impact how certain parts of our site function.</p>
        <p>If you have any questions about this Cookie Policy, please contact us at <a href="mailto:support@iwfinanceconsulting.com">support@iwfinanceconsulting.com</a>.</p>
      </div>
    </div>
  );
};

export default Cookie;