import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/logo/2.png';

export default function Header() {
  const navRef = useRef();

  const scrollToIntro = () => {
    const introSection = document.getElementById('introPage');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.scrollBy(0, -100);
      showNavbar();
    }
  };

  const scrollToActivities = () => {
    const activitiesSection = document.getElementById('activities');
    if (activitiesSection) {
      activitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      window.scrollBy(0, 1000);
      showNavbar();
    }
  };

  const showNavbar = () => {
    navRef.current.classList.toggle('res_nav');
  };

  return (
    <>
      <header>
        <div className="logos">
          <img src={logo} className='logoImg' alt='Logo' />
        </div>
        <nav ref={navRef}>
          <a href='#' onClick={scrollToIntro}>Home</a>
          <a href='#' onClick={scrollToActivities}>Follow Me</a>
          <a href='https://chat.whatsapp.com/EDdkBcLGGMI0gUC9QPPLWl' target='_blank' rel='noopener noreferrer'>Contact</a>
          <button className='nav-btn nav-close' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

    </>
  );
}
