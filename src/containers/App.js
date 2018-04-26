import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
class App extends React.Component{
    render () {
        //console.log(this.props);
        const {dispatch,visibleTodos,visibilityFilter} =this.props;
        //console.log('dispatch:',dispatch);
        //console.log('visibleTodos:',visibleTodos);
        //console.log('visibilityFilter:',visibilityFilter);
        //console.log('this.props:',this.props);
        //const unsubscribe = this.props.subscribe(() => {
        //    console.log('subscribe----------:',this.props.getState());
        //});
// 发起一系列 action
        //dispatch(addTodo('Learn about actions'))
        //dispatch(addTodo('Learn about reducers'))
        //dispatch(addTodo('Learn about store'))
// 停止监听 state 更新
        //unsubscribe();
        return (
            <div className="container">
                <p>this is index</p>
                <p><Link to="/coupon">coupon</Link></p>
                <p><Link to="/mianshi">mianshi</Link></p>
                <AddTodo onAddClick ={ text =>
                   dispatch(addTodo(text))
                } />
                <TodoList
                    todos={visibleTodos}
                    todoClick={ (index) =>{
                        //console.log('ff:',index);
                        dispatch(completeTodo(index));
                    } }
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={(nextFilter) =>{
                        dispatch(setVisibilityFilter(nextFilter))
                    }}
                />
            </div>
        );
    }
}
const selectTodos = (todos,filter) => {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((todo)=>todo.completed);
        case  VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todos => {
                if(!todos.completed){
                    return todos
                }
            })
    }
}
const select = ( {app} ) =>{
    let state=app;
    return {
        state:state,
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}
export default connect(select)(App);
