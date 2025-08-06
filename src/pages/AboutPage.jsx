import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';

function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IW Finance Consulting · About Us</title>
        {/* <meta name="title" content="About IW Finance Consulting | Trusted Global Crypto Platform" />
        <meta property="og:title" content="About IW Finance Consulting | Trusted Global Crypto Platform" />
        <meta property="twitter:title" content="About IW Finance Consulting | Trusted Global Crypto Platform" />

        <meta name="description" content="Learn more about IW Finance Consulting — a crypto platform committed to security, simplicity, and global accessibility. Discover our mission, values, and the people behind the service." />
        <meta property="og:description" content="Learn more about IW Finance Consulting — a crypto platform committed to security, simplicity, and global accessibility. Discover our mission, values, and the people behind the service." />
        <meta property="twitter:description" content="Learn more about IW Finance Consulting — a crypto platform committed to security, simplicity, and global accessibility. Discover our mission, values, and the people behind the service." /> */}

        <meta property="og:image" content="preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='padd-page padd-acc'>
        <Header />
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default AboutPage;
