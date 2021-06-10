import React, { useState } from 'react';
import './Todo.css';

function TodoList(){

    // estado do input
    const [text, setText] = useState("");

    // estado da lista
    const [items, setItems] = useState([]);

    // função para pegar o valor do input
    function handleChenge(event){
        let textInput = event.target.value;
        setText(textInput);
    }

    // função para adicionar um item na lista
    function addItem(event){
        event.preventDefault();
        if(text){
            setItems([...items, text]);
            setText("");
        }

    }

    return(<div className="container">
                <h1>TodoList</h1>

                <form>
                    <input onChange={handleChenge} type="text" value={text}></input>
                    <button onClick={addItem}>Adicionar</button>
                </form>

                <ul>
                    {items.map(item=><li>{item}</li>)}
                </ul>
            </div>)



}


export default TodoList;