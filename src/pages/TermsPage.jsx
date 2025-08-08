import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from '../components/GlobalComponents/Header/Header';
import Footer from '../components/GlobalComponents/Footer/Footer';
import Terms from '../components/Docs/Terms/Terms';

function TermsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>IW Finance Consulting · Terms of Use?</title>

        <meta property="og:image" content="preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className='padd-page padd-acc'>
        <Header />
        <Terms />
        <Footer />
      </div>
    </HelmetProvider>
  )
  
}

export default TermsPage;
