import '../App.css';
import React from 'react';
import Barra from './Barra';
import Inicio from './Inicio';

const Home=()=>{

    return(
           
      <div>
          <div>
             <Barra/> 
          </div>
          <Inicio />   
      </div>
        
    );
  
}

export default  Home;