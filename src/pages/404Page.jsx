import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation

const NotFound = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const goToHome = () => {
    navigate('/'); // Navigate to homepage (Otomatiks India)
  };

  const goToHomeUAE = () => {
    navigate('/ae'); // Navigate to the second home page (Otomatiks UAE)
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.title}>404 - Page Not Found</h4>
      <p style={styles.message}>The page you're looking for doesn't exist.</p>
     
      <div style={styles.buttonContainer}>
        <button onClick={goToHome} style={styles.button}>Otomatiks India</button>
        <button onClick={goToHomeUAE} style={styles.button}>Otomatiks UAE</button>
      </div>
    </div>
  );
};

// Inline styles for better control
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif', // Add a nice font for better readability
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333', // Dark color for the title
  },
  message: {
    fontSize: '1.2rem',
    margin: '20px 0',
    color: '#555', // Slightly lighter color for the message
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF', // Blue color for the link
    fontSize: '1.1rem',
  },
  buttonContainer: {
    marginTop: '30px', // Space between the buttons
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#066aab',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#066aab', 
  }
};

export default NotFound;
