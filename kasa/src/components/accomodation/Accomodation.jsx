import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import accommodations from '../../datas/logements.json';
import './accomodation.scss'
import '../../assets/downArrow.png'

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
        <button className='carousel-button prev' onClick={handlePrev}>&lt;</button>
        <button className='carousel-button next' onClick={handleNext}>&gt;</button>
        <p className='imgCounter'>
           {pictures.length > 1 ? `${currentIndex + 1}/${pictures.length}` : ''}
        </p>

      </div>

      <div className='leftWrap'>
        <h1>{accommodation.title}</h1>
        <h2>{accommodation.location}</h2>
        <div className='tags'>
          {accommodation.tags.map((tag, index) => (
            <span key={index} className='tag'>{tag}</span>
          ))}
        </div>
      </div>
      

        <div className='description'>
          <p className='descTitle'>Description</p>
          <img src="../../assets/downArrow" alt="downArrow" />
          <p>{accommodation.description}</p>
        </div>
        <div className='host'>
          <p></p>
        </div>
    
    </div>
  );
}

export default AccommodationDetails;
