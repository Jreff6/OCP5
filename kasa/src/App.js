import './App.css';
import Banner from './components/banner/Banner';
import Quote from './components/quote/Quote';
import React from 'react';
import Gate from './components/gate/Gate';
import Footer from './components/footer/Footer';

function App() {
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

export default App;
