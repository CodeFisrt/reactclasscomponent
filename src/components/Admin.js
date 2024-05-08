import React, { Component } from 'react';

class Admin extends Component {


    constructor() {
        super();
        this.state = {
            name: 'Chetan',
            surname: 'Jogi',
            cityList: ['Pune', 'Mumbai']
        }
        console.log("constructor")
    } 
    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

 
    changeNAme = () => {
        this.setState(prevState => ({ name: "Rahul" }));
    }
   
    
    render() {
        return (
            <div>
                Admin - {this.state.name}
                <button onClick={this.changeNAme}> changeNAme</button>
            </div>
        );
    }
}

export default Admin;