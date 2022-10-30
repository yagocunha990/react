import React from 'react';
import Logo  from './img/ronaldo.jpg';

export default function Header(){
    return(
        <header>
            <img src={Logo}/>
            <h1>Yago</h1>
            
        </header>
    )
}