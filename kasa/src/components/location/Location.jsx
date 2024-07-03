import React from 'react';
import './location.scss';
import { useNavigate } from 'react-router-dom'

const Location = ({ location }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
        navigate(`/accomodation/${location.id}`);
    };
  const imageUrl = location.cover;
  return (
    <div className="location-card" onClick={handleNavigate}>
      <div className="image-container">
        <img src={imageUrl} alt={location.title} className="location-cover" />
        <div className="title-overlay">{location.title}</div>        
      </div>
    </div>
  );
};

export default Location;
