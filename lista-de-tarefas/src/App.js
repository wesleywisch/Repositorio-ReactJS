import React from 'react';
import './Todo.css';

function TodoList(){

    return(<div className="container">
                <h1>TodoList</h1>

                <form>
                    <input type="text"></input>
                    <button>Adicionar</button>
                </form>

                <ul>
                    <li>Item-1</li>
                    <li>Item-1</li>
                    <li>Item-1</li>
                </ul>
            </div>)



}


export default TodoList;