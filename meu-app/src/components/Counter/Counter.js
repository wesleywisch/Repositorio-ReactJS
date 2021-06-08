import React from 'react';


class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {count: this.props.count}
        this.add = this.add.bind(this);
    }

    add(){
         this.setState((state)=>{return {count: state.count + 1}})
    }

    render(){
        return(<div>
                    <h1>Counter: {this.state.count}</h1>
                    <button onClick={this.add} >add</button>
                </div>)
    }
}

export default Counter;