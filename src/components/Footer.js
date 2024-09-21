import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="footer-copyright"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        © 2024 MyBrand. All Rights Reserved.
      </motion.p>
      
      <motion.div
        className="footer-links"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.a
          href="#facebook"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Facebook
        </motion.a>
        <motion.a
          href="#instagram"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Instagram
        </motion.a>
        <motion.a
          href="#twitter"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Twitter
        </motion.a>
      </motion.div>
      
      <motion.div
        className="footer-contact"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>Contact us: <a href="mailto:support@mybrand.com">support@mybrand.com</a></p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
