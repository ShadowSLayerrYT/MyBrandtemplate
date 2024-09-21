import React from 'react';
import { motion } from 'framer-motion';
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: customer1,
      text: "I'm absolutely in love with the quality and design of my custom t-shirt. It's become my go-to outfit for both casual days and special events!",
      rating: 5
    },
    {
      name: "Jane Smith",
      image: customer2,
      text: "The customer service was exceptional, and the t-shirt exceeded my expectations. I'll definitely be ordering more in the future!",
      rating: 5
    }
  ];

  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center'
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '40px'
        }}
      >
        What Our Customers Say
      </motion.h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px'
      }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * index, duration: 0.8 }}
    style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '30px',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <motion.img
      src={testimonial.image}
      alt={testimonial.name}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: '3px solid #4a4a4a'
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
    <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '10px' }}>{testimonial.name}</h3>
    <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>"{testimonial.text}"</p>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {[...Array(testimonial.rating)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + (0.1 * i) }}
          style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 2px' }}
        >
          ★
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Testimonials;