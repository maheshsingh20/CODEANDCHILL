import React from 'react';
import './WelcomeUser.css';
import welcomeImage from '../assets/kjk.jpg';  // Make sure the path is correct

function WelcomeUser() {
  return (
    <section className="welcome-section" style={{ backgroundImage: `url(${welcomeImage})` }}>
      <h1>Welcome, User!</h1>
      <p>We’re glad to have you here. Explore our courses and resources!</p>
    </section>
  );
}

export default WelcomeUser;
