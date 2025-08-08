import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import Banner from '../components/HomePage/Banner/Banner';
import WhatSets from '../components/HomePage/WhatSets/WhatSets';
import MargList from '../components/HomePage/MargList/MargList';
import BuiltFor from '../components/HomePage/BuiltFor/BuiltFor';
import GetStarted from '../components/HomePage/GetStarted/GetStarted';
import JoinUs from '../components/HomePage/JoinUs/JoinUs';
import GetInTouch from '../components/HomePage/GetInTouch/GetInTouch';

function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IW Finance Consulting</title>
        {/* <meta name="title" content="IW Finance Consulting | Secure & Simple Crypto Management" />
        <meta property="og:title" content="IW Finance Consulting | Secure & Simple Crypto Management" />
        <meta property="twitter:title" content="IW Finance Consulting | Secure & Simple Crypto Management" />
      
        <meta name="description" content="Join over 120,000 users worldwide with IW Finance Consulting. Buy, store, and trade crypto confidently on a fast, secure, and intuitive platform built for all experience levels." />
        <meta property="og:description" content="Join over 120,000 users worldwide with IW Finance Consulting. Buy, store, and trade crypto confidently on a fast, secure, and intuitive platform built for all experience levels." />
        <meta property="twitter:description" content="Join over 120,000 users worldwide with IW Finance Consulting. Buy, store, and trade crypto confidently on a fast, secure, and intuitive platform built for all experience levels." /> */}

        <meta property="og:image" content="preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='ovf-hidden'>
        <Header />
        <Banner />
        <WhatSets />
        <MargList />
        <BuiltFor />
        <GetStarted />
        <JoinUs />
        <GetInTouch />
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default HomePage;
