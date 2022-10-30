import React from 'react'
import Dados from './dados'

export default function Corpo(){
    const cnl=()=>{
     return   'CFB CURSOS'
    }
    const yt='youtube.com/cfbcursos'
    const crs='React.js'

    const somar=(v1,v2)=>{
        return v1 + v2   
        
    }
    return(
        <section>
            <h2>Curso de React</h2>
            <p>se inscreva no canal</p>
            <p>ative o sininho e clique no joinha</p>

            <Dados 
                canal={cnl}
                youtube={yt} 
                curso={crs}
                somar={somar}
             />
        </section>
    )
}