const addTodo = (todoValue) => {
    let newTodo = { title: todoValue, isEdit: false, isTodoChecked: false }
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


const todoChecked = (todos, index,) => {
    let myTodos = todos
    myTodos[index].isTodoChecked = !(myTodos[index].isTodoChecked)
    todos = myTodos
    console.log(todos)
    return (dispatch) => dispatch({ type: "isTodoChecked", data: todos })
}


const isEditFalseForAllTodos = (todos) => {
    let myTodos = todos

    for (let i = 0; i < myTodos.length; i++) {
        myTodos[i].isEdit = false
        todos = myTodos
    }

    return (dispatch) => dispatch({ type: "editFalseForAll", data: todos })
}



export { addTodo, deleteTodo, editTodoInput, updateTodo, todoChecked, isEditFalseForAllTodos }