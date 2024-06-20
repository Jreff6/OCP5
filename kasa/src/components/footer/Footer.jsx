import React from 'react';
import './footer.scss' ;
import logo from '../../assets/bw_logo.png';

function Footer () {
    return (
        <div className='FooterWrapper'>
            <span className='imgWrap'>
                <img alt='logo' src= { logo }/>
            </span>
            <p className='conditions'>© 2020 Kasa. All Rights reserved</p>
        </div>
    );
}

export default Footer