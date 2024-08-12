import React from 'react';
import './style.css'; // Import a CSS file for styling

const partners = [
  { name: 'Company One', logo: 'logo1.jpeg' },
  { name: 'Company Two', logo: 'logo1.jpeg' },
  // Add more partners here
];

function HringPartners() {
  return (
    <div className="hiring-partners">
      <h2>Our Hiring Partners</h2>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner">
            <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HringPartners;