import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import Form from '../components/Form/Form';

function ContactPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IW Finance Consulting · Why IW Finance Consulting?</title>
        {/* <meta name="title" content="Why Choose IW Finance Consulting – The Trusted Broker for Serious Traders" />
        <meta property="og:title" content="Why Choose IW Finance Consulting – The Trusted Broker for Serious Traders" />
        <meta property="twitter:title" content="Why Choose IW Finance Consulting – The Trusted Broker for Serious Traders" />

        <meta name="description" content="Discover what sets IW Finance Consulting apart. From regulated operations and stable pricing to premium tools and instant withdrawals, we help you trade smarter and safer." />
        <meta property="og:description" content="Discover what sets IW Finance Consulting apart. From regulated operations and stable pricing to premium tools and instant withdrawals, we help you trade smarter and safer." />
        <meta property="twitter:description" content="Discover what sets IW Finance Consulting apart. From regulated operations and stable pricing to premium tools and instant withdrawals, we help you trade smarter and safer." /> */}
        <meta property="og:image" content="preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='padd-page padd-acc'>
        <Header />
        <Form />
        <Footer />
      </div>
    </HelmetProvider>
  )
  
}

export default ContactPage;
