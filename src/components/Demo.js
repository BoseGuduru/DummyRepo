import React, { Component } from 'react'

export class Demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Bose"
        }
    }

    handleClick = () => {
        this.setState({
            name: "Guduru"
        })
    }
    render() {
        return (
            <div>
                <h1>Hello I am {this.state.name}</h1>
                <button onClick={this.handleClick}>Change Name</button>
            </div>
        )
    }
}

export default Demo