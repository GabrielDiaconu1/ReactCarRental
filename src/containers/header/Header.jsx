import React from 'react';
import car from '../../assets/car.png';
import './header.css';
import skyline from '../../assets/skyline.png';

const Header = () => (
    <div className="car__header section__padding" id="home">
      <div className="car__header-content">
      <div className="text-container">
        <p>Plan your trip now.</p> 
        <h1 className='save'>Save <span className='big'>big</span> with our car rentals.</h1>
        <p>Rent the car of your dreams. Unbelievable prices. Flexible pick-up options and much more</p>
      </div>
       
        <div>
        <img className="car" src={car} alt="no image"/>
        <img className="skyline" src={skyline} alt ="no image"/>
        </div>

      </div>
    </div>
  );
  
  export default Header;