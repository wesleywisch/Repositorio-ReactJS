import React from 'react';
import './style.css'
import Card from '../Cards/Card';


function DoneIgm(props){

    if(props.done){
        
        return( <img src="./assests/on.png" alt="Concluido"></img> )

    } else{

        return ( <img src="./assests/off.png" alt="Não realizado"></img> )

    }
}

export default function List(props){

    return(
        <ul>
            {props.items.map(item=><li key={ item.id }>
                    <Card className={ item.done ? "done item" : "item" } >

                        {item.text}


                        <div className="buttons">
                            <button onClick={() =>{ props.onDone(item) }}><DoneIgm done={item.done}></DoneIgm></button>

                            <button onClick={()=>{ props.onItemDelete(item) }}><img src="./assests/lixo.png" alt="deletar"></img></button>

                        </div>

                    </Card>

                </li>)}
        </ul>
    )

}
