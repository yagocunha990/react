import React from 'react';



 
export default function App(){

  const carros=[
    
   {categoria: "Esporte", preco:"11000000.00", modelo: "Golf GTI"} 
  ];
  const listaCarros=carros.map(
    (c,i)=> 
    <li key={i}>{i} - {c.categoria} {c.modelo} - R${c.preco} </li>
    
  )

  return(
    <>
        <ul>{listaCarros}</ul>
         
      
      </>
  );
}


