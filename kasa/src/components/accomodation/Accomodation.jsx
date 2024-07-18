import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import accommodations from '../../datas/logements.json';
import './accomodation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse from '../../components/collapse/Collapse'
import Rating from '../../components/rating/Rating'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function AccommodationDetails() {
  const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = accommodation.pictures;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='wrapper'>
      <div className='carousel'>
        <img src={pictures[currentIndex]} alt={accommodation.title} className='carousel-image' />
        {pictures.length > 1 && (
        <div className='buttonWrap'>
          <button className='carousel-button prev' onClick={handlePrev}> <FontAwesomeIcon icon={faChevronUp} /> </button>

          <button className='carousel-button next' onClick={handleNext}> <FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
  )}
        <p className='imgCounter'>
          {pictures.length > 1 ? `${currentIndex + 1}/${pictures.length}` : ''}
        </p>
      </div>

      <div className='midWrap'>
        <div className='leftWrap'>
          <h1>{accommodation.title}</h1>
          <h2>{accommodation.location}</h2>
          <div className='tags'>
            {accommodation.tags.map((tag, index) => (
              <span key={index} className='tag'>{tag}</span>
            ))}
          </div>
        </div>

        <div className='rightWrap'>
          <div className='host'>
            <p className='hostname'> {accommodation.host.name}</p>
            <img src={accommodation.host.picture} alt="host" className='hostPic' />
            
            <Rating rating={accommodation.rating} />
          </div>
        </div>
      </div>  

      <div className='bottomWrap'>
      <Collapse  title="Description" content={accommodation.description} />
      <Collapse  title="Equipements" content={accommodation.equipments} />
    </div>
  </div>
    
  );
}

export default AccommodationDetails;
