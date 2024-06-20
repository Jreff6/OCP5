import './App.css';
import Banner from './components/banner/Banner'
import Quote from './components/quote/Quote'
import React from 'react';
import Gate from './gate';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Quote />
      <Gate />
      <Footer/>
    </React.Fragment>   
  );
}

export default App;
