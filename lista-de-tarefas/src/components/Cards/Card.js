import React from 'react';


export default function Card(props){
    return( <div className={ props.className? `${props.className} card` : "card" }>
        {props.children}
    </div> )
}