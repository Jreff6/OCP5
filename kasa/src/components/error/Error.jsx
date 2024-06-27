import './error.scss'
import React from 'react';



function Error() {
  
  return (
    <div id="main">
      <div className="wrapper">
        <p className="errorNum">404</p>
        <p className="info">Oups! La page que vous demandez n'existe pas.</p>
        <p className='return'>Retourner sur la page d'accueil </p>
      </div>      
      
    </div>
  );
}

export default Error;