import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import { Element } from 'react-scroll';
import AOS from 'aos';
import "aos/dist/aos.css";

import whatsApp from './assets/chat1.png';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Header />
      <Element name="introPage">
        <Intro />
      </Element>
      <Element name='activities'>
        <Activities />
      </Element>
      <Faq />
      <Footer />
      <div className="fixed-bottom right-100 p-3" style={{ zIndex: "6", left: "initial", background: 'white', borderRadius: '45%', margin: '20px' }}>
        <a href='https://chat.whatsapp.com/EDdkBcLGGMI0gUC9QPPLWl' target='_blank'>
          <img src={whatsApp} width="40" alt='WhatsApp' style={{ background: 'white' }} />
        </a>
      </div>
    </>
  );
}

export default App;
