import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Contador(props){

    const contador = useSelector( (state) =>{ return state.counter } );
    const dispatch = useDispatch();

    return(
        <div className="contador">
            <div>{ contador }</div>
            <button onClick={ () => { dispatch( {type:'DECREMENT'} )} }>-</button>
            <button onClick={ () => { dispatch( {type:'INCREMENT'} )} }>+</button>
        </div>
    )
}