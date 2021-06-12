import React from 'react';


export default function CardElement(props){

    return(
        <div id={props.card.id} className="card">
            <div className="card_front">
                <img className="icon" 
                src={`assests/imagens/${props.card.icon}.png`} 
                alt={props.card.icon}></img>
            </div>


            <div className="card_back">
                {"</>"}
            </div>


        </div>
    )

}