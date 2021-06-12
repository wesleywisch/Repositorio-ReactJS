import React, { useState } from 'react';

import GameOver from './Components/GameOver/GameOver';

export default function MemoryGame(){

    // estado do gameOver
    const [gameOver, setGameOver] = useState(false);

    // função para começar novamente o jogo
    function restart(){
        setGameOver(false)
    }

    return(
        <div>
            <GameOver show={gameOver} handleRestart={restart} ></GameOver>
        </div>
    )
}