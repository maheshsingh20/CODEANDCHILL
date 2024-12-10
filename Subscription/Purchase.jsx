import React from 'react';
import './Purchase.css';

const Purchase = () => {
  return (
    <div className="subscription-page">
      <div className="header">
        <h1>Unlock Premium Features</h1>
        <p>Subscribe to our premium plan and get access to exclusive features!</p>
      </div>

      <div className="plan-container">
        <h2>Premium Plan</h2>
        <p>Get unlimited access to advanced features like personalized content, ad-free experience, and more.</p>

        <div className="plans">
          <div className="plan">
            <h3>Monthly Plan</h3>
            <p>$9.99/month</p>
          </div>
          <div className="plan">
            <h3>Yearly Plan</h3>
            <p>$99.99/year</p>
          </div>
        </div>

        <p className="disclaimer">No hidden fees. Cancel anytime.</p>

        <button className="purchase-btn">Purchase Premium</button>
      </div>
    </div>
  );
};

export default Purchase;
