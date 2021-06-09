import React, { useState } from 'react';



function Counter(props){
    // Hook estado
    const [count, setCount] = useState(props.count);

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
//             localStorage.setItem("state", JSON.stringify(this.state))
//         });
//     }

//     componentDidMount(){
//         this.setState(JSON.parse(localStorage.getItem("state")));
//     }
    
//     render() {
//         return (<div>
//             <h1>Counter: {this.state.count}</h1>
//             <button onClick={this.add} >add</button>
//         </div>)
//     }
// }

export default Counter;