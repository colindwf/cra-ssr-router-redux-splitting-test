/**
 * Created by xiaodeng on 2018/3/13.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default  class  AaddTodo extends React.Component{
    handleClick(e){
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value='';
    }
    render () {
        return(
            <div className="todo-add">
                <input type="text" ref="input" placeholder ="请输入内容" />
                <input type="button" value="添加待办事项" onClick={e => {
                    this.handleClick(e);
                }} />
            </div>
        )
    }
}

