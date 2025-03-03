import React, {Component} from "react";

class App2 extends Component{
    constructor(props){
        super(props);
        this.state = {nomeDaTecnologia: 'Front-end'}
    }

    render(){
        return(
            <div>
                <h1>Preciso estudar: {this.state.nomeDaTecnologia}</h1>
            </div>
        );
    }
}

export default App2;