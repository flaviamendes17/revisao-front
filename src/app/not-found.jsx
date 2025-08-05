"use client";

import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img 
        src="/images/computador-quebrado.png" 
        alt="omputador quebrado" 
        style={styles.image} 
      />
      <h1 style={styles.title}>ERRO 404</h1>
      <p style={styles.message}>
        Poxa! Não conseguimos encontrar a página que você procurava. Verifique o endereço e tente novamente.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #FFC1E3, #FFD59E)',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  image: {
    width: '150px', 
    height: '150px', 
    marginBottom: '1rem', 
  },
  title: {
    fontSize: '4rem',
    color: '#FF4081',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
    marginBottom: '1rem',
    fontFamily: "'Quicksand-bold, -serif",
    fontWeight: '700',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '2rem',
  },
};

export default NotFound;