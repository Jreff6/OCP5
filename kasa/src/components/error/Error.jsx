import { useRouteError } from "react-router-dom";
import './error.scss'
import Banner from './components/banner/Banner';
import React from 'react';
import Footer from './components/footer/Footer';



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Banner />
      <div className="main">
        <p className="errorNum">404</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <a href="#">Retourner sur la page d'accueil</a>
      </div>      
      <Footer />
    </div>
  );
}