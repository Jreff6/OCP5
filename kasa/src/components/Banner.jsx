import React from 'react';
import logo from '../assets/LOGO.png';

function Banner () {
    return (
        <div>
             <img alt='logo' src={ logo } />
             <p>this is the title</p>
        </div>
    );
}

export default Banner;