import React from 'react';

export default function List(props){

    return(
        <ul>
            {props.items.map(item=><li>{item}</li>)}
        </ul>
    )

}
