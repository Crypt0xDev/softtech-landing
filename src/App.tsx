import React from 'react';
import { Toaster } from 'react-hot-toast';
import HomePage from '@/pages/HomePage';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import ScrollToTop from '@/components/shared/ScrollToTop';
import SEO from '@/components/shared/SEO';
import '@/styles/index.css';

const App: React.FC = () => {
  return (
    <>
      <SEO />
      <HomePage />
      <WhatsAppButton />
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 5000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
};

export default App;
