import React, { useEffect, useState } from 'react';



function Counter(props){
    // Hook estado
    const [count, setCount] = useState(props.count);


    // Hooks effect
    useEffect(()=>{  
        setCount(parseInt(localStorage.getItem("Contador")));

        return ()=>{} //essa função que ele está retornando vai ser executada somente quando nosso componente for destruido é o que equivale ao (componentWillUnmount).

    },[]) // quando o array estiver vazio ele somente será executado somente uma unica vez.

    useEffect(()=>{
        document.title = count;
        localStorage.setItem("Contador", count);
    },[count]) // mandamos ele ficar de olho no count, toda vez que acontecer uma atualização nesse estado ele vai disparar esse evento

    // useEffect(()=>{}) // nesse caso implicitamente ele vai verificar alguma alteração de estado geral.

    function add(){
        setCount(count + 1)
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}



// class Counter extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {count: 0}
//         this.add = this.add.bind(this);
//     }

//     add() {
//         this.setState((state) => { return { count: state.count + 1 } }, () => { 
//             console.log(this.state) 
//         });
//     }

//     componentDidMount(){
//         document.title = this.state.count
//         this.setState(JSON.parse(localStorage.getItem("state")));
//     }

//     componentDidUpdate(){
//         document.title = this.state.count
//         localStorage.setItem("state", JSON.stringify(this.state))
//     }
    
//     render() {
//         return (<div>
//             <h1>Counter: {this.state.count}</h1>
//             <button onClick={this.add} >add</button>
//         </div>)
//     }
// }

export default Counter;