import React, { useState } from 'react';

import List from './components/Lista/List';
import TodoForm from './components/Formulario/TodoForm';
import Item from './Item';
import './Todo.css';

function TodoList(){

    // estado da lista
    const [items, setItems] = useState([]);

    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])
    }

    return(<div className="container">

                <h1>TodoList</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List items={items}>
                </List>

            </div>)

}


export default TodoList;