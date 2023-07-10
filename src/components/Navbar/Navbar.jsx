import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const getLinkForItem = (item) => {
  switch (item) {
    case 'LinkedIn':
      return 'https://www.linkedin.com/in/ifeanyi-emmanuel/';
    case 'Twitter':
      return 'https://twitter.com/The2MinEngineer';
    case 'Medium':
      return 'https://medium.com/@The2MinEngineer';
    case 'Download Resume':
      return 'https://drive.google.com/file/d/1HY329XidR9qTLVPX5PqOXkBjnh96Fydi/view?usp=drive_link';
    default:
      return '#';
  }
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              {['LinkedIn', 'Twitter', 'Medium', 'Download Resume'].map(
                (item, index) => (
                  <li key={index}>
                    <a href={getLinkForItem(item)}>{item}</a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
