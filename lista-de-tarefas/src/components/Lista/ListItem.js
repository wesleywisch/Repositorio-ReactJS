import React from 'react';
import Card from '../Cards/Card';


function DoneIgm(props){

    if(props.done){
        
        return( <img src="./assests/on.png" alt="Concluido"></img> )

    } else{

        return ( <img src="./assests/off.png" alt="Não realizado"></img> )

    }
}

export default function ListItem(props){

    return(
        <li>
            <Card className={ props.item.done ? "done item" : "item" } >

                {props.item.text}

                <div className="buttons">
                    <button onClick={() =>{ props.onDone(props.item) }}><DoneIgm done={props.item.done}></DoneIgm></button>

                    <button onClick={()=>{ props.onItemDelete(props.item) }}><img src="./assests/lixo.png" alt="deletar"></img></button>

                </div>

            </Card>

        </li>)
}
