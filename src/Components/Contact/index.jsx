import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
          }

          .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1200px; /* Width is increased */
            min-height: 600px; /* Increase height */
            margin: 100px auto;
            padding: 30px;
            background-color: rgb(149, 145, 145);
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .contact-info {
            flex: 1;
            min-width: 350px;
            margin-right: 30px;
          }

          .contact-info h2 {
            margin-bottom: 10px;
            color: #333;
          }

          .contact-info p {
            margin: 5px 0;
            color: #555;
          }

          .contact-info hr {
            margin: 20px 0;
            border: none;
            border-top: 1px solid #ddd;
          }

          .contact-form {
            flex: 2;
            min-width: 450px;
          }

          .form-group {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
          }

          .form-group input {
            flex: 1;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }

          textarea {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 20px;
          }

          button {
            background-color: #e63946;
            color: #fff;
            border: none;
            padding: 12px 25px;
            font-size: 18px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #d62828;
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            .contact-container {
              flex-direction: column;
              margin: 50px auto;
              padding: 20px;
            }

            .contact-info {
              margin-right: 0;
              margin-bottom: 20px;
            }

            .contact-form {
              min-width: 100%;
            }

            .form-group {
              flex-direction: column;
              gap: 10px;
            }

            .form-group input, textarea {
              font-size: 14px;
            }

            button {
              width: 100%;
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .contact-container {
              margin: 30px auto;
              padding: 15px;
            }

            .form-group input, textarea {
              font-size: 14px;
            }

            button {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="contact-container">
        <div className="contact-form">
          <form>
            <h1>Contact Us</h1><br />
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone" required />
            </div>
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
