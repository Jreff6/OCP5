import React, { useEffect, useState } from 'react';
import Location from '../location/Location';
import locationsData from '../../datas/logements.json';
import './gate.scss' ;

const Gate = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(locationsData); // Charger les données JSON dans l'état
  }, []);

  return (
    <div className="gate">
      {locations.map(location => (
        <Location key={location.id} location={location} /> // Passer les données en props
      ))}
    </div>
  );
};

export default Gate;
