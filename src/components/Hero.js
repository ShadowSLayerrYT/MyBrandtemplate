import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}
        >
          Printify: Where Imagination Meets Innovation
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}
        >
          Transform your ideas into reality with our cutting-edge print-on-demand solutions
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#4a4a4a',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Start Creating
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-around' }}
        >
          <Feature icon="🖨️" text="Custom Printing" />
          <Feature icon="🎨" text="Design Tools" />
          <Feature icon="🌍" text="Global Shipping" />
        </motion.div>
      </div>
    </motion.section>
  );
};

const Feature = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</span>
    <p style={{ fontSize: '1rem', color: '#333' }}>{text}</p>
  </motion.div>
);

export default Hero;