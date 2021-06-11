import React from 'react';
import Card from '../Cards/Card';
import './style.css';



export default function Modal(props){

    function hideModal(event){
        let target = event.target;
        if(target.id === "modal"){
            props.onHideModal();
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={ props.show ? "modal" : "modal hide" }>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    );
}