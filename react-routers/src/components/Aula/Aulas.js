import React from 'react';


import data from '../../Data'

export default function Aulas(props) {
    
    return(
        <div className="page">
            <h1>Aulas</h1>

            <ul className="aulas">
                {data.map(aula => <li key={ aula.id }> { aula.title } </li>  )}
            </ul>
        </div> 
    )
}