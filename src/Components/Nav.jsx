import React, { useState } from 'react';
import GraceFulLogo from '../assets/Grace-FulYoga.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Styling/Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useTransform, useScroll } from "framer-motion";

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [400, 600], [0, 1]);

  const handleLinkClick = (id) => {
      toggleMenu();
      const element = document.getElementById(id);

      if (element) {
          const offset = 150; 
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
          });

          closeMenu();
      }
  };

  return (
      <motion.div style={{ opacity }}>
          {menuOpen ? (
                  <CloseIcon className='menu-icon1' fontSize='large' onClick={toggleMenu} />
                  ) : (
                  <MenuIcon className='menu-icon1' fontSize='large' onClick={toggleMenu} />
                  )}
              <nav>
                  {menuOpen && (
                  <div className='popup-menu'>
                      <li className='menu-item' onClick={() => handleLinkClick('about')}>
                      ABOUT
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('timetable')}>
                      TIMETABLE
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('quotes')}>
                      TESTIMONIALS
                      </li>
                      <li className='menu-item' onClick={() => handleLinkClick('contact')}>
                      CONTACT
                      </li>
                  </div>
                  )}
              <li>
                  <img src={GraceFulLogo} className='nav-logo' onClick={() => handleLinkClick('nav')}></img>
              </li>
                  <li className='nav-title' onClick={() => handleLinkClick('about')}>
                      About
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('timetable')}>
                      Timetable
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('quotes')}>
                  Testimonials
                  </li>
                  <li className='nav-title' onClick={() => handleLinkClick('contact')}>
                      Contact
                  </li>
              <li>
                  <a className='insta-icon' href="https://www.instagram.com/saorsayoga_/?hl=en" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                  </a>
              </li>
          </nav>
      </motion.div>
  );
}