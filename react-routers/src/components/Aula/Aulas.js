import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


import data from '../../Data'

export default function Aulas(props) {

    const match = useRouteMatch()

    useEffect(()=>{
        console.log(match)
    })

    return(
        <div className="page">
            <h1>Aulas</h1>

            <ul className="aulas">
                {data.map(aula => <li key={ aula.id }> <Link to={`${match.url}/${aula.id}`} className="link"> { aula.title } </Link> </li>  )}
            </ul>
        </div> 
    )
}