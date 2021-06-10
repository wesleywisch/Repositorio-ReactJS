import React, { useState } from 'react';

export default function TodoForm(props){

    // estado do input
    const [text, setText] = useState("");

   // função para pegar o valor do input
   function handleChenge(event){
       let textInput = event.target.value;
       setText(textInput);
   }

   // função para adicionar um item na lista
   function addItem(event){
       event.preventDefault();
       //o if server para ver se tem algum valor no input se não tiver ele não coloca na lista.
       if(text){
           // setItems([...items, text]);
           props.onAddItem(text)
           setText("");
       }
   }

   return(
           <form>
               <input onChange={handleChenge} type="text" value={text}></input>
               <button onClick={addItem}>Adicionar</button>
           </form>
   )
               
}