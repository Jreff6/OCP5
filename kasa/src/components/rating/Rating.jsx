import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.scss';
const Rating = ({ rating }) => {
    const stars = [];

    // Générer les étoiles en fonction de la note
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // Étoile pleine (rouge)
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
        } else {
            // Étoile vide (grise)
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
        }
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
};

export default Rating;
