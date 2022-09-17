const saveTodoValueOnChange = (value) => {
    return (dispatch) => dispatch({ type: "todoValueOnChange", data: value })
}

const addTodo = (todo) => {
    return (dispatch) => dispatch({ type: "addTodo", data: todo })
}

export { saveTodoValueOnChange, addTodo }