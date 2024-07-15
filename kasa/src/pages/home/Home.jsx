import Banner from '../../components/banner/Banner'
import Quote from '../../components/quote/Quote'
import Gate from '../../components/gate/Gate'
import Footer from '../../components/footer/Footer'
import React from 'react';
import './home.scss'

function Home() {
    return (
      <React.Fragment>
        <div className='top'>
          <Banner />
          <Quote />
        </div>
        <div className='mid'>
          <Gate />
        </div>
        
        <Footer/>
      </React.Fragment>   
    );
  }
  
  export default Home;