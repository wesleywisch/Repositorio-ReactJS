import React, { useState } from 'react';

import List from './components/Lista/List'
import TodoForm from './components/Formulario/TodoForm'
import './Todo.css';

function TodoList(){

    // estado da lista
    const [items, setItems] = useState([]);

    function onAddItem(item){
        setItems([...items, item])
    }

    return(<div className="container">

                <h1>TodoList</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List items={items}>
                </List>

            </div>)

}


export default TodoList;