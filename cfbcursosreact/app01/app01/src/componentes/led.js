import React from 'react';
import LedVerde from './img/certificadopng.png'
import LedVermelho from './img/to do list.png'

 
export default function Led(props){

    

  return(
    <>
   
      <img style={{width:'500px' }} src={props.ligado?LedVerde:LedVermelho}/>
      <button
       onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar': 'Ligar'} 
       </button>    
      
      </>
  );
}


