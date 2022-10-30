import React,{useState} from 'react';
import Led from './componentes/led'


 
export default function App(){

const [ligado,setLigado]=useState(false)

const cancelar=(obj)=>{
  return obj.preventDefault()
}

  return(
    <>
   
      <Led ligado={ligado} setLigado={setLigado} />

      <a href='https://youtube.com/cfbcursos'
        target='_blank'
        onClick={(e)=>cancelar(e)}
      >
        CFB CURSOS  
      </a>   
      
      </>
  );
}


