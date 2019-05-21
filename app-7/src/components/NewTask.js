import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        }
    }

    handleInputChange = value => {
        this.setState({ input:value })
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({ input:"" })
    }

    render() {
        return(
            <div>
            <input 
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
            />
            <button onClick={this.handleAdd}>add</button>
            </div>
        )
    }
}