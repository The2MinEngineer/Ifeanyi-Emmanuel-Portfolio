import React from 'react';
import { FaTwitter, FaLinkedinIn, FaMedium, FaDownload } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ifeanyi-emmanuel/">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/The2MinEngineer">
        <FaTwitter />
      </a>
    </div>
    <div>
      <a href="https://medium.com/@The2MinEngineer">
        <FaMedium />
      </a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/1HY329XidR9qTLVPX5PqOXkBjnh96Fydi/view?usp=drive_link">
        <FaDownload />
      </a>
    </div>
  </div>
);

export default SocialMedia;
