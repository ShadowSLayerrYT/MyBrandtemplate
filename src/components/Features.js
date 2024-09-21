import React from 'react';
import { motion } from 'framer-motion';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

const Features = () => {
  const features = [
    {
      title: "Custom Products",
      description: "Choose from thousands of custom designs.",
      image: feature1
    },
    {
      title: "Fast Shipping",
      description: "We ensure that your products are delivered fast and safely.",
      image: feature2
    },
    {
      title: "Affordable Pricing",
      description: "Get the best quality at the best prices.",
      image: feature3
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: '40px 20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
      }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          marginBottom: '40px',
          color: '#333'
        }}
      >
        What We Offer
      </motion.h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

const FeatureCard = ({ feature, index }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * (index + 1) }}
    style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <motion.div
      whileHover={{ rotate: 5 }}
      style={{
        width: '200px',
        height: '200px',
        marginBottom: '20px',
        overflow: 'hidden',
        borderRadius: '8px'
      }}
    >
      <img 
        src={feature.image} 
        alt={feature.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </motion.div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{feature.title}</h3>
    <p style={{ fontSize: '1rem', color: '#666' }}>{feature.description}</p>
  </motion.div>
);

export default Features;