import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


export default function PrivateRoute({children, ...rest}){

    const login = useSelector(state => state)

    return(<Route {...rest} 
    
        render={( { location }) => 
            login ? (children) : (<Redirect to={{
                pathname: "/negado",
                state: { from: location }
            }} ></Redirect>)
        }
    >

    </Route>)

}