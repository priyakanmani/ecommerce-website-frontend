import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }

          .top-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #1a1a1a;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff;
          }

          .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: #4F46E5;
          }

          .hamburger-menu {
            display: none;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;
            height: 24px;
            justify-content: space-around;
          }

          .hamburger-menu div {
            width: 30px;
            height: 4px;
            background-color: white;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: ${isMenuOpen ? 'flex' : 'none'};
              position: absolute;
              top: 60px;
              right: 0;
              background-color: #1a1a1a;
              width: 100%;
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
              box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            }

            .hamburger-menu {
              display: flex;
            }
          }

          .footer {
            background-color: #1a1a1a;
            color: white;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            text-align: center;
            align-items: center;
          }

          .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1200px;
            width: 100%;
            gap: 20px;
            padding-left:40px;
          }

          .footer-column {
            flex: 1 1 200px;
            text-align: left;
          }

          .footer-column h3 {
            margin-bottom: 15px;
            font-size: 1.2rem;
          }

          .footer-column ul {
            list-style: none;
          }

          .footer-column ul li {
            margin: 5px 0;
          }

          .footer-column ul li a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-column ul li a:hover {
            color: #4F46E5;
          }

          .social-icons {
            display: flex;
            gap: 15px;
          }

          .social-icons a {
            color: white;
            font-size: 1.5rem;
            transition: color 0.3s ease;
          }

          .social-icons a:hover {
            color: #4F46E5;
          }

          .subscribe-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .subscribe-form input[type="email"] {
            padding: 10px;
            width: 250px;
            border: none;
            border-radius: 4px;
            outline: none;
          }

          .subscribe-form button {
            padding: 10px 20px;
            background-color: #4F46E5;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .subscribe-form button:hover {
            background-color: #3a34b8;
          }

          .footer-text {
            margin-top: 10px;
            font-size: 0.9rem;
            color: #ccc;
          }
        `}
      </style>

      <nav className="top-navbar">
        <h1 className="logo">ShopEase</h1>
        
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <div style={{ marginTop: "80px", minHeight: "calc(100vh - 60px)" }}>{children}</div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: support@shopease.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 E-commerce St, City, Country</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Subscribe to our Newsletter</h3>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="footer-text">&copy; 2025 ShopEase. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
