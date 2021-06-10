import React, { useState } from 'react';

import List from './components/Lista/List';
import TodoForm from './components/Formulario/TodoForm';
import Item from './Item';
import './Todo.css';

function TodoList(){

    // estado da lista
    const [items, setItems] = useState([]);

    // função para adicionar um item na lista
    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])
    }

    //função para deletar um item da lista
    function onItemDelete(item){

        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
    }


    return(<div className="container">

                <h1>TodoList</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onItemDelete={onItemDelete} items={items}>
                </List>

            </div>)

}


export default TodoList;