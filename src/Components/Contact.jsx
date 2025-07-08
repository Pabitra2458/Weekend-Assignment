import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:6372983769"> 6372983769</a></p>
        <p><strong>Email:</strong><a href="mailto:kumarpradhanpabitra72@gmail.com"> kumarpradhanpabitra72@gmail.com</a></p>
        <p>
          <strong>LinkedIn: </strong>
          <a
            href="https://www.linkedin.com/in/pabitra-kumar-pradhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pabitra Kumar Pradhan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;