import React, { useEffect, useState } from 'react';

import GameOver from './Components/GameOver/GameOver';
import GameBoard from './Components/GameBoard/GameBoard';
import game from './game/game';



export default function MemoryGame(){

    // estado do gameOver
    const [gameOver, setGameOver] = useState(false);

    //estado das cartas
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        setCards(game.createCardsFromTechs());
    }, []) // para inicializar so apenas uma vez as cartas

    // função para começar novamente o jogo
    function restart(){
        game.clearCards()
        setCards(game.createCardsFromTechs());
        setGameOver(false)
    }

    // função para virar as cartas
    function handleFlip(card){
    
        game.flipCard(card.id, ()=>{
            // GameOver callback
            setGameOver(true)
        }, ()=>{
            // NoMatchCallBack
            setCards([...game.cards])
        });
        setCards([...game.cards])
    }

    return(
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart} ></GameOver>
        </div>
    )
}