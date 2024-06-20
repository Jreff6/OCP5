import React from 'react';
import './location.scss';

const Location = ({ location }) => {
  return (
    <div className="location-card">
      <img src={location.cover} alt={location.title} className="location-cover" />
      <h2>{location.title}</h2>
      <p>{location.description}</p>
      <div className="host-info">
        <img src={location.host.picture} alt={location.host.name} className="host-picture" />
        <p>{location.host.name}</p>
      </div>
      <p>Location: {location.location}</p>
      <p>Rating: {location.rating}</p>
      <ul>
        {location.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <div className="tags">
        {location.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Location;
