const addTodo = (todoValue) => {
    let newTodo = { title: todoValue, isEdit: false }
    return (dispatch) => dispatch({ type: "addTodo", data: newTodo })
}

const deleteTodo = (todos, index) => {
    let myTodos = todos
    myTodos.splice(index, 1)
    todos = myTodos
    return (dispatch) => dispatch({ type: "deleteTodo", data: todos })
}


const editTodoInput = (todos, index) => {
    let myTodos = todos
    myTodos[index].isEdit = true
    todos = myTodos
    return (dispatch) => dispatch({ type: "editTodo", data: todos })
}

const updateTodo = (todos, index, updatedTodoValue) => {
    let myTodos = todos
    myTodos[index].title = updatedTodoValue
    myTodos[index].isEdit = false
    todos = myTodos

    return (dispatch) => dispatch({ type: "updateTodo", data: todos })

}



export { addTodo, deleteTodo, editTodoInput, updateTodo }