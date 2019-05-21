import React, { Component } from 'react'
import Todo from './Todo'

export default class List extends Component {
    render() {
        let list = this.props.task.map((task, index) => {
            return <Todo key={index} task={task}/>
        })
        return <div>{list}</div>
    }
}

