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

import whatsApp from './assets/img10.png';

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
      <Element name='activities' id='activities'>
        <Activities />
      </Element>
      <Faq />
      <Footer />
      <div className="fixed-bottom right-100 p-3" style={{ zIndex: "6", left: "initial", margin: '20px', background: 'transparent'}}>
        <a href='https://chat.whatsapp.com/EDdkBcLGGMI0gUC9QPPLWl' target='_blank' style={{background: 'transparent',  backdropFilter: 'blur 2rem'}}>
          <img src={whatsApp} width="130" alt='WhatsApp' style={{background: 'transparent', filter: 'drop-shadow(10px 7px 10px violet)'}} />
        </a>
      </div>
    </>
  );
}

export default App;
