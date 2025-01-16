import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: []
        };
    }

    inputChange = (eve) => {
        this.setState({ task: eve.target.value });
    };

    addTask = () => {
        const { task, tasks } = this.state;
        if (task.trim() === '') return;

        this.setState({
            tasks: [...tasks, task],
            task: ''
        });
    };

    render() {
        return (
            <div className="todo-app">
                <h1>To-Do List Management</h1>
                <div className="input-container">
                    <input className='task'
                        type="text"
                        value={this.state.task}
                        onChange={this.inputChange}
                        placeholder="Enter your task"
                    />
                    <button onClick={this.addTask}>Add Task</button>
                </div>
                <ol className="task-list">
                    {this.state.tasks.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Todo;