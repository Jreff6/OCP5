import React from 'react';
import './footer.scss' ;
import logo from '../../assets/bw_logo.png';

function Footer () {
    return (
        <footer className='FooterWrapper'>
            <span className='imgWrap'>
                <img alt='logo' src= { logo }/>
            </span>
            <p className='conditions'>© 2020 Kasa. All Rights reserved</p>
        </footer>
    );
}

export default Footer