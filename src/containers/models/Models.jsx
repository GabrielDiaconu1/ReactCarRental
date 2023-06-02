import React, { useState } from 'react';
import './models.css';
import audiA1Image from '../../assets/audiA1.jpg';
import mercedesGLK from '../../assets/mercedesGLK.jpg';
import toyotaCamry from '../../assets/toyotaCamry.jpg';
import vwGolf from '../../assets/vwGolf.jpg';
import vwPassat from '../../assets/vwPassat.jpg';
import bmw320 from '../../assets/bmw320.jpg';

const Models = () => {
  const [selectedImage, setSelectedImage] = useState(audiA1Image);
  const [gridData, setGridData] = useState({
    model: 'Audi A1 S-Line',
    mark: 'Audi',
    year: '2008',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rentPerDay: '$25',
  });

  const handleImageChange = (image, newData) => {
    setSelectedImage(image);
    setGridData(newData);
  };

  return (
    <div className="container text-center" id="vehiclemodel">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3"></div>
        <div className="col">
         
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(audiA1Image, {
          model: 'Audi A1 S-Line',
          mark: 'Audi',
          year: '2008',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>Audi A1 S-Line</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(vwGolf, {
          model: 'VW Golf 6',
          mark: 'Volkswagen',
          year: 'Year',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>VW Golf 6</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(toyotaCamry, {
          model: 'Toyota Camry',
          mark: 'Toyota',
          year: 'Year',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>Toyota Camry</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(bmw320, {
          model: 'BMW 320 ModernLine',
          mark: 'BMW',
          year: 'Year',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>BMW 320 ModernLine</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(mercedesGLK, {
          model: 'Mercedes-Benz GLK',
          mark: 'Mercedes-Benz',
          year: 'Year',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>Mercedes-Benz GLK</button>
        <button type="button" className="btn btn-secondary" onClick={() => handleImageChange(vwPassat, {
          model: 'VW Passat CC',
          mark: 'Volkswagen',
          year: 'Year',
          doors: '4/5',
          ac: 'Yes',
          transmission: 'Automatic',
          fuel: 'Gasoline',
          rentPerDay: '$25',
        })}>VW Passat CC</button>
      </div>

      <div className="col">
      
          <img id="imageDisplay" src={selectedImage} alt="Selected Image" />
        </div>
        <div className="col">
        <div class="flex-grow-0">
          <div className="row">
            <div className="col-6 col-span-6">{gridData.rentPerDay} / rent per day</div>
          </div>
          <div className="row">
            <div className="col-6">Model</div>
            <div className="col-6">{gridData.model}</div>
          </div>
          <div className="row">
            <div className="col-6">Mark</div>
            <div className="col-6">{gridData.mark}</div>
          </div>
          <div className="row">
            <div className="col-6">Year</div>
            <div className="col-6">{gridData.year}</div>
          </div>
          <div className="row">
            <div className="col-6">Doors</div>
            <div className="col-6">{gridData.doors}</div>
          </div>
          <div className="row">
            <div className="col-6">AC</div>
            <div className="col-6">{gridData.ac}</div>
          </div>
          <div className="row">
            <div className="col-6">Transmission</div>
            <div className="col-6">{gridData.transmission}</div>
          </div>
          <div className="row">
            <div className="col-6">Fuel</div>
            <div className="col-6">{gridData.fuel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
