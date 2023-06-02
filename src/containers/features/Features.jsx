import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Feature from '../../components/feature/Feature';
import './features.css';

function CalendarDropdown({ featuresData }) {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const [carType, setCarType] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const handlePickUpLocationChange = (event) => {
    setPickUpLocation(event.target.value);
  };

  const handleDropOffLocationChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <div className='white-box'>
      <div className="car__features section__padding" id="features">
        <div className="car__features-heading">
          <form>
            <div class="container">
              <div class="grid-container">
                <div>
                  <label>Pick-up</label>
                  <DatePicker
                    selected={pickUpDate}
                    onChange={(date) => setPickUpDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a date"
                    className="custom-calendar-dropdown"
                  />
                </div>
                <div>
                  <label>Drop-off</label>
                  <DatePicker
                    selected={dropOffDate}
                    onChange={(date) => setDropOffDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="Select a date"
                    className="custom-calendar-dropdown"
                  />
                </div>
                <div>
                  <label>Select Your Car Type</label>
                  <select id="dropdown1" value={carType} onChange={handleCarTypeChange}>
                    <option>Select your car type</option>
                    <option>Audi A1 S-Line</option>
                    <option>VW Golf-6</option>
                    <option>Toyota Camry</option>
                    <option>BMW 320 ModernLine</option>
                    <option>Mercedes-Benz GLK</option>
                    <option>VW Passat CC</option>
                  </select>
                </div>
                <div>
                  <label>Pick-up</label>
                  <select id="dropdown2" value={pickUpLocation} onChange={handlePickUpLocationChange}>
                    <option>Select pick up location</option>
                    <option>Hamilton</option>
                    <option>Toronto</option>
                    <option>Burlington</option>
                    <option>Ajax</option>
                    <option>St. Catherines</option>
                    <option>Barrie</option>
                  </select>
                </div>
                <div>
                  <label>Drop-off</label>
                  <select id="dropdown3" value={dropOffLocation} onChange={handleDropOffLocationChange}>
                    <option>Select drop off location</option>
                    <option>Hamilton</option>
                    <option>Toronto</option>
                    <option>Burlington</option>
                    <option>Ajax</option>
                    <option>St. Catherines</option>
                    <option>Barrie</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className="car__features-container">
          {featuresData &&
            featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarDropdown;
