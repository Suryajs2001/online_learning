import React from 'react';
import './style.css'; // Import a CSS file for styling
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a creative agency that specializes in designing and developing
            beautiful, user-friendly web applications. It is shown by default, until the collapse plugin adds the appropriate classNames that we use to style each element. These classNames control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">BLOGS</a></li>
            <li><a href="#portfolio">INVESTOR</a></li>
            <li><a href="#contact">RECOGONITION / MEDIA</a></li>
            <li><a href="#contact">PRIVACY POLICY</a></li>
            <li><a href="#contact">TERM & CONDITION</a></li>
            <li><a href="#contact">REFUND POLICY</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter">Twitter</i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facbook<i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram<i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin<i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <button className="cta-button">Subscribe</button>
      </div>
    </footer>
  );
};

 