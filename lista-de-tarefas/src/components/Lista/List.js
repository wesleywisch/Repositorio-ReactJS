import React from 'react';

export default function List(props){

    return(
        <ul>
            {props.items.map(item=><li key={item.id}>{item.text}</li>)}
        </ul>
    )

}
