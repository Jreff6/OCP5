import React from 'react';
import falaise from '../../assets/falaise.png';
import './quote.scss' ;

function Quote () {
    return (
        <div className='QuoteWrapper'>
             <img alt='falaise' src={ falaise } />
             <p>Chez vous, partout et ailleurs</p>   
          
            
        </div>
    );
}

export default Quote;