/**
 * Created by xiaodeng on 2018/3/13.
 */
import React from 'react';

export default class TodoList extends React.Component{

    render () {
        return (
            <div className="todo-list">
                <ul>
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                <li className='li'
                                    key={'todo_'+index}
                                    onClick={() => { this.props.todoClick(index)}}
                                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                                >
                                    {todo.text}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}