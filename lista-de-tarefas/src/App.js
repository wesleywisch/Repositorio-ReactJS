import React, { useState } from 'react';
import './Todo.css';

function TodoList(){

    const [text, setText] = useState("");

    function handleChenge(event){
        let textInput = event.target.value;
        setText(textInput);
    }

    return(<div className="container">
                <h1>TodoList</h1>

                <form>
                    <input onChange={handleChenge} type="text"></input>
                    <button>Adicionar</button>
                </form>

                <ul>
                    <li>{text}</li>
                </ul>
            </div>)



}


export default TodoList;