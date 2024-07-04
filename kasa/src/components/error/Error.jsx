import './error.scss'
import React from 'react';
import { useNavigate } from 'react-router-dom'



function Error() {
  
  const navigate = useNavigate();


    const handleNavigateHome = () => {
        navigate('/')
    };





  return (
    <div id="main">
      <div className="wrapper">
        <p className="errorNum">404</p>
        <p className="info">Oups! La page que vous demandez n'existe pas.</p>
        <p className='return' onClick={handleNavigateHome} >Retourner sur la page d'accueil </p>
      </div>      
      
    </div>
  );
}

export default Error;