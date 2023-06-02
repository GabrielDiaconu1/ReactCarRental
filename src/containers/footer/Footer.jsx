import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="container text-center" id="contact">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col">
        <ul>
          <li><b>Car Rental</b></li>
          <li>We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
          <li>(123) -456-789</li>
          <li>carrental@gmail.com</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li><b>Company</b></li>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>How we work</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li><b>Working Hours</b></li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      <div className="col">
        <ul>
          <li><b>Subscription</b></li>
          <li>Subscribe with your email address for the latest news and updates.</li>
          <li>
            <form>
              <input type="email" placeholder="Enter Email Address" />
              <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
