import './App.css';
import Banner from './components/banner/Banner'
import Quote from './components/quote/Quote'
import React from 'react';
import Gate from './gate';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Quote />
      <Gate />
    </React.Fragment>   
  );
}

export default App;
