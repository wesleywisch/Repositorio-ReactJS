import React, { useContext } from 'react';
import './style.css'
import { ContadorContext } from '../ContadorContext';


export default function Contador(props) {

    const [contagem, setContagem] = useContext(ContadorContext);

    return (
        <div className="contador">
            <div>{contagem}</div>
            <button onClick={() => { setContagem(anterior => anterior - 1) }}>-</button>
            <button onClick={() => { setContagem(sucessor => sucessor + 1) }}>+</button>
        </div>
    )
}