import React from "react";
import styles from "./Privacy.module.scss";

const Privacy = () => {

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        <h1>PRIVACY POLICY</h1>
        <h3>Last updated: July 28, 2023</h3>

        <h2>1. Introduction</h2>
        <p>At <b>IW Finance Consulting</b>, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines the categories of personal data we collect and process, as well as the measures we take to protect that data. IW Finance Consulting acts as the data controller responsible for the handling of personal information in accordance with the General Data Protection Regulation (GDPR).</p>
        <p>This Privacy Policy applies to all entities under IW Finance Consulting and governs the processing of personal data related to clients, contact persons, service providers, authorized representatives, visitors, ultimate beneficial owners, and beneficiaries.</p>
        <h2>2. Types of Personal Data Collected</h2>
        <p>We collect personal data to provide and improve our services. The information we may gather includes:</p>
        <ul>
          <li><b>Contact and identification details</b> such as name, email address, home address, social security number, and phone number;</li>
          <li><b>Financial data</b> including credit card information, bank account numbers, statements, and documents verifying the source of wealth or funds;</li>
          <li><b>Demographic information</b> such as age, gender, and location;</li>
          <li><b>Online identifiers</b>, including IP addresses, MAC addresses, and data related to how users interact with our website or email communications (e.g., email opens and clicks).</li>
        </ul>
        <h2>3. Purposes of Processing and Legal Basis</h2>
        <p>We process personal data for the following purposes:</p>
        <ul>
          <li>To fulfill the terms of agreements with our clients and carry out transactions on their behalf;</li>
          <li>To communicate with users regarding their accounts and for marketing and informational purposes;</li>
          <li>To improve the quality, security, and performance of our services.</li>
        </ul>
        <p>The primary legal basis for processing personal data is the performance of our contractual obligations. Additionally, we may process personal data to comply with legal and regulatory requirements. In certain cases, processing is based on our legitimate interests, such as in the areas of marketing, analytics, and product development.</p>
        <h2>4. Sub-processors and Data Sharing</h2>
        <p>IW Finance Consulting may share your personal data with regulatory authorities to comply with legal obligations. We may also engage third-party partners for service provision. When data is shared with non-governmental third parties, IW Finance Consulting remains responsible and ensures data protection through binding Data Processing Agreements.</p>
        <p>Transfers of personal data outside the EEA will only occur if adequate protections are in place or other legal safeguards are met.</p>
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect personal data from unauthorized access, modification, or loss. These include secure servers and encryption for sensitive information.</p>
        <h2>6. Rights Under GDPR</h2>
        <p>Under the GDPR, you have the following rights regarding your personal data:</p>
        <ul>
          <li>To request access to the data we hold about you (data subject access request);</li>
          <li>To request corrections of inaccurate or incomplete data;</li>
          <li>To request deletion or restriction of processing unless retention is legally required;</li>
          <li>To object to processing based on our legitimate interests, including direct marketing and profiling;</li>
          <li>To request data portability – i.e., to receive certain personal data in a machine-readable format and transfer it to another controller, where technically feasible.</li>
        </ul>
        <h2>7. Data Storage and Protection</h2>
        <p>IW Finance Consulting maintains appropriate safeguards for storing and processing personal data. Access to sensitive information is restricted to authorized personnel only, and our systems are secured against unauthorized use.</p>
        <p>We may process and store your data—including encrypted financial details—at facilities or through service providers located globally. Our data protection practices comply with applicable legal standards.</p>
        <p>All IW Finance Consulting employees are obligated to follow relevant data protection laws and are subject to strict confidentiality duties. Any misuse or unauthorized disclosure of customer data may lead to disciplinary action.</p>
        <p>When contacting our team, we may ask for identifying information to verify your identity and ensure your data remains secure. We also encourage you to take steps to protect your own data, such as using strong, confidential passwords and notifying us immediately if you suspect unauthorized access.</p>
        <h2>8. Data Retention</h2>
        <p>We retain personal data only as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws and regulations.</p>
        <h2>9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page and, where appropriate, communicated to you by email. Please check back regularly to stay informed.</p>
        <h2>10. Contact Us</h2>
        <p>If you have any questions, concerns, or complaints about this Privacy Policy or the way your data is handled, please contact us directly.</p>
      </div>
    </div>
  );
};

export default Privacy;