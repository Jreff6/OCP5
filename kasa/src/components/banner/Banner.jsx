import React from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/LOGO.png';
import './Banner.scss' ;

function Banner () {

    const navigate = useNavigate();

    const handleNavigateAbout = () => {
        navigate('/about');
    };

    const handleNavigateHome = () => {
        navigate('/')
    };


    return (
        <div className='bannerWrap'>
             <img alt='logo' src={ logo } />
            <span className='buttonWrap'>
                <button onClick={handleNavigateHome}>Accueil</button>
                <button onClick={handleNavigateAbout}>A Propos</button>
            </span>  
        </div>
    );
}

export default Banner;