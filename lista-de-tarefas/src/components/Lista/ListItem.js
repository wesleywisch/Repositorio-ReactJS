import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../Cards/Card';
import { deleteItem, changeDone } from '../../actions/listAction'


function DoneIgm(props){

    if(props.done){
        return( <img src="./assests/on.png" alt="Concluido"></img> )
    } else{
        return ( <img src="./assests/off.png" alt="Não realizado"></img> )
    }
}

export default function ListItem(props){

    const dispatch = useDispatch()

    return(
        <li>
            <Card className={ props.item.done ? "done item" : "item" } >

                {props.item.text}

                <div className="buttons">
                    <button onClick={() =>{ dispatch( changeDone(props.item.id) ) }}><DoneIgm done={props.item.done}></DoneIgm></button>

                    <button onClick={()=>{ dispatch( deleteItem(props.item.id) ) }}><img src="./assests/lixo.png" alt="deletar"></img></button>

                </div>

            </Card>

        </li>)
}
