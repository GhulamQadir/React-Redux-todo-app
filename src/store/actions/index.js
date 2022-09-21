const addTodo = (todoValue) => {
    let newTodo = { title: todoValue }
    // addNewTodo(newTodo)
    return (dispatch) => dispatch({ type: "addTodo", data: newTodo })
}

const deleteTodo = (todos, index) => {
    let myTodos = todos
    myTodos.splice(index, 1)
    todos = myTodos
    return (dispatch) => dispatch({ type: "deleteTodo", data: todos })
}


export { addTodo, deleteTodo }