import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../actions/listAction';

export default function TodoForm(props){

    // estado do input
    const [text, setText] = useState("");

    const dispatch = useDispatch();

   // função para pegar o valor do input
   function handleChenge(event){
       let textInput = event.target.value;
       setText(textInput);
   }

   // função para adicionar um item na lista
   function addItemEvent(event){
       event.preventDefault();
       //o if server para ver se tem algum valor no input se não tiver ele não coloca na lista.
       if(text){
           // setItems([...items, text]);
           dispatch( addItem(text) )
           setText("");
           props.onHideModal()
       }
   }

   return(
           <form>
               <input onChange={handleChenge} type="text" value={text}></input>
               <button onClick={addItemEvent}>Adicionar</button>
           </form>
   )
               
}