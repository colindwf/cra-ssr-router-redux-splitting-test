import { combineReducers } from 'redux';
import { ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters;
const  Initodos =[
    {
        text:'t1',
        completed:false
    },
    {
        text:'t2',
        completed:false
    },
    {
        text:'t3',
        completed:false
    },
    {
        text:'t4',
        completed:true
    },
    {
        text:'t5',
        completed:false
    }
]
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER :
            return action.filter;
        default:
            return state
    }
}
const todos = (state=Initodos, action) => {
    switch (action.type){
        case ADD_TODO :
            let new_state1 = [
                {
                    text:action.text,
                    completed:false
                },
                ...state
            ]
            //console.log('new_state1',new_state1);
            return new_state1;
        case COMPLETE_TODO :
            let new_state = [
                ...state.slice(0,action.index),
                Object.assign({},state[action.index],{
                    completed:!state[action.index].completed
                }),
                ...state.slice(action.index+1)
            ]
            //console.log(state);
            //console.log(new_state);
            return new_state;
        default :
            return state;
    }

}
const todoApp = combineReducers(
    {
        visibilityFilter,
        todos
    }
)
export  default todoApp;