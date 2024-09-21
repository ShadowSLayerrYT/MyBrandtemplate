import React from 'react';
import { motion } from 'framer-motion';
import tshirt1 from '../assets/tshirt1.jpg';
import tshirt2 from '../assets/tshirt2.jpg';
import tshirt3 from '../assets/tshirt3.jpg';

const ProductShowcase = () => {
  const sectionStyle = {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px'
  };

  const showcaseStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <section style={sectionStyle}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={titleStyle}
      >
        Our Latest Collection
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={subtitleStyle}
      >
        Explore our high-quality, custom-designed T-shirts.
      </motion.p>

      <motion.div
        style={showcaseStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[tshirt1, tshirt2, tshirt3].map((tshirt, index) => (
          <motion.img
            key={index}
            src={tshirt}
            alt={`T-Shirt ${index + 1}`}
            style={imageStyle}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProductShowcase;