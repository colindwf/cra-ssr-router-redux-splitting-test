export const ADD_TODO="ADD_TODO";
export const COMPLETE_TODO= 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';
//列表显示过滤
export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',// 全显示
    SHOW_COMPLETED:'SHOW_COMPLETED',// 只显示完成
    SHOW_ACTIVE:'SHOW_ACTIVE'// 只显示完成
}
export const addTodo =  text => {
    return {
        type :ADD_TODO,
        text
    }
}
//用户点击todolist
export const completeTodo = (index) => {
    //console.log('index:',index);
    return {
        type:COMPLETE_TODO,
        index
    }
}
export const setVisibilityFilter = (filter) => {
    return {
        type : SET_VISIBILITY_FILTER,
        filter
    }
}

export const setAsyncVisibilityFilter = filter => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setVisibilityFilter(filter)))
);