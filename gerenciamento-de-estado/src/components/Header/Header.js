import React, { useContext } from 'react';
import './style.css'
import { ContadorContext } from '../ContadorContext';

export default function Header(props){

    const [contagem] = useContext(ContadorContext)

    return(
        <div className="header">
            <h3>Contador</h3>
            <div>{contagem}</div>
        </div>
    )

}