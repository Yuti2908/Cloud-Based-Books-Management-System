import React from 'react';
import Navbar from './Navbar';

function About() {
    return (
      <>
      <div>
        <Navbar/>
      </div>
      <div className="about-section bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">About Our Bookstore Management System</h2>
    <p className="lead text-center">
      Welcome to our online bookstore management system! We've created this platform to provide a seamless experience for both administrators and users. Here's what our bookstore can do:
    </p>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h5>User Features:</h5>
        <ul>
          <li>Create an account and log in to access personalized features.</li>
          <li>View a comprehensive list of available books.</li>
          <li>Explore detailed information about individual books.</li>
          <li>Easy signup and login processes for a user-friendly experience.</li>
        </ul>
      </li>
      <li className="list-group-item">
        <h5>Admin Features:</h5>
        <ul>
          <li>Secure admin login to access exclusive functionalities.</li>
          <li>Perform CRUD (Create, Read, Update, Delete) operations on book records.</li>
          <li>Efficiently manage and update book details in real-time.</li>
        </ul>
      </li>
    </ul>
    <p className="text-center mt-4">
      Our bookstore aims to provide a modern and efficient way of managing book records, making it accessible for users to explore a diverse collection of books while giving administrators the tools they need for effective management. Enjoy your reading journey with us!
    </p>
  </div>
</div>
      </>
    );
  }
  
  export default About;