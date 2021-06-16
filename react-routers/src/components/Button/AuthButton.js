import React from 'react';

import { loginAction, logoutAction } from '../../Store/actions/loginActions';
import { useSelector, useDispatch  } from 'react-redux';




export default function Auth(){

    const login = useSelector(state => state);
    const dispatch = useDispatch();


    return(login ?
        <button onClick={ () => { dispatch(logoutAction()) }}>Logout</button> 
        :
        <button onClick={ () => { dispatch(loginAction()) }}>Login</button>
    )
}