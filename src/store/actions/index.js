const addTodo = (todo) => {
    return (dispatch) => dispatch({ type: "addTodo", data: todo })
}

const deleteTodo = (todos, index) => {
    let myTodos = todos
    myTodos.splice(index, 1)
    todos = myTodos
    return (dispatch) => dispatch({ type: "deleteTodo", data: todos })
}


export { addTodo, deleteTodo }