import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Data from '../../Data';

export default function Aula(props) {
    const params = useParams();

    const [aula, setAula] = useState('');

    useEffect( () =>{
        setAula(Data.filter(aula => aula.id == params.id )[0]);
    }, [params]);
    
    return(
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div> 
    )
}