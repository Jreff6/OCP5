import React from 'react';
import './location.scss';

const Location = ({ location }) => {
  const imageUrl = location.cover;
  return (
    <div className="location-card">
      <div className="image-container">
        <img src={imageUrl} alt={location.title} className="location-cover" />
        <div className="title-overlay">{location.title}</div>
      </div>
    </div>
  );
};

export default Location;
