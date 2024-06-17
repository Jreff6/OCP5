import React from 'react';
import logo from '../../assets/LOGO.png';
import './Banner.scss' ;

function Banner () {
    return (
        <div className='bannerWrap'>
             <img alt='logo' src={ logo } />
            <span className='buttonWrap'>
                <button>Accueil</button>
                <button>A Propos</button>
            </span>  
        </div>
    );
}

export default Banner;