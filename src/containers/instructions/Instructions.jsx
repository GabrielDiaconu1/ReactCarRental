import React from 'react';
import check from '../../assets/check.png';
import headset from '../../assets/headset.png';
import cloud from '../../assets/cloud.png';

const Instructions = () => (
  <div className="container text-center" id="about">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    
    <div className="col">
      <img src={check} alt="check" />
      <h1>Select Car</h1>
      <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
    </div>
    <div className="col">
      <img src={headset} alt="headset" />
      <h1>Contact Operator</h1>
      <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
    </div>
    <div className="col">
      <img src={cloud} alt="cloud" />
      <h1>Let's Drive</h1>
      <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
    </div>
  </div>
</div>

);

export default Instructions;
