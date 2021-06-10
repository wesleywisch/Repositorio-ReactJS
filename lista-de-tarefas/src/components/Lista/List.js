import React from 'react';

export default function List(props){

    return(
        <ul>
            {props.items.map(item=><li key={item.id}>
                    {item.text}
                    <button onClick={()=>{props.onItemDelete(item)}}><img src="./assests/lixo.png" alt="deletar"></img></button>
                </li>)}
        </ul>
    )

}
