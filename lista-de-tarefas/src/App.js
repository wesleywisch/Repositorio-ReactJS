import React, { useEffect, useState } from 'react';

import List from './components/Lista/List';
import TodoForm from './components/Formulario/TodoForm';
import Item from './components/Estrutura/Item';
import './Todo.css';

const SAVED_ITEMS = "savedItems"

function TodoList(){

    // estado da lista
    const [items, setItems] = useState([]);

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

        if(savedItems){
            setItems(savedItems);
        }
    }, []) // esse e para apenas retornar a lista, ele retorna so quando a página for carregada ou seja so executada apenas 1 vez

    useEffect(()=>{
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]) // esse serve para observar o estado ITEMS e quando for modificado ele salva no localstorage.

    // função para adicionar um item na lista
    function onAddItem(text){

        let it = new Item(text);

        it.id = items.length

        setItems([...items, it])
    }

    //função para deletar um item da lista
    function onItemDelete(item){

        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
    }

    // função para verificar se a tarefa já foi completada
    function onDone(item){

        let updatedItems = items.map(it =>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems)

    }


    return(<div className="container">

                <h1>TodoList</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onDone={onDone} onItemDelete={onItemDelete} items={items}>
                </List>

            </div>)

}


export default TodoList;