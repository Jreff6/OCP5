import React from 'react';
import './location.scss';

const Location = ({ location }) => {
  const imageUrl = location.pictures && location.pictures.length > 0 ? location.pictures[0] : location.cover;
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
