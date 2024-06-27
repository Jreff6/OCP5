import './error.scss'
import React from 'react';



function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="main">
      <div className="wrapper">
        <p className="errorNum">404</p>
        <p className="info">Oups! La page que vous demandez n'existe pas.</p>
        <a href="#">Retourner sur la page d'accueil</a>
      </div>      
      
    </div>
  );
}

export default Error;