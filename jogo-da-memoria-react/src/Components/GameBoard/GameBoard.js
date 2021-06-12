import React from 'react';

import CardElement from '../Card/CardElement';


export default function GameBoard(props) {

    return (
        <div id="gameBoard">
            {props.cards.map((card, index) => 
                <CardElement key={index} card={card}></CardElement>
            )}
        </div>
    )

}