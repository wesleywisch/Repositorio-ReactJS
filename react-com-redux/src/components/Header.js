import React from 'react';
import { useSelector } from 'react-redux';


export default function Header(props){

    const contador = useSelector( (state) =>{ return state.counter } )

    return(
        <div className="header">
            <h3>Contador</h3>
            <div>{contador}</div>
        </div>
    )
}