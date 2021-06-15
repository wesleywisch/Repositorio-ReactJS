import React from 'react';

import { Link } from 'react-router-dom';


export default function Nav(props) {
    
    return(
        <nav className="nav">
            <h1>Wesley</h1>
            <div>
                <ul className="nav-links">
                    <li> <Link to="/aulas">Aulas</Link> </li>
                    <li> <Link to="/sobre">Sobre</Link> </li> 
                    {/* sempre usamos o Link e não o (a) mesmo do html para evitar que a página toda seja recaregada */}
                </ul>
            </div>
        </nav>
    )

}