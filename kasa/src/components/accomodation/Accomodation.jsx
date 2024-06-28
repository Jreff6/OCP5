import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import accommodations from '../../datas/logements.json';
import './accomodation.scss'

function AccommodationDetails() {
  const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === id);

  
  /*if (!accommodation) {

    const navigate = useNavigate();

    const handleNavigateError = () => {
        navigate('*')
    };
    handleNavigateError
  }
*/
  return (
    <div>
      <h1>{accommodation.title}</h1>
      <img src={accommodation.image} alt={accommodation.title} />
      <p>{accommodation.description}</p>
      <p>Price: ${accommodation.price}</p>
      {/* Ajoutez ici toutes les informations que vous souhaitez afficher */}
    </div>
  );
}

export default AccommodationDetails;
