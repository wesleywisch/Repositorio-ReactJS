import React from 'react';
import './style.css'
import ListItem from './ListItem'


export default function List(props){

    return(
        <ul>
            {props.items.map(item=> <ListItem key={item.id} item={item} onDone={props.onDone} onItemDelete={props.onItemDelete}></ListItem>)}
        </ul>
    )

}
