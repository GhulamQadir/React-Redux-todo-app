const initialState = {
    todos: [{ title: "First todo" }, { title: "redux learning" }],
    todoTitleValue: "hello"
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "todoValueOnChange":
            return ({
                ...state,
                todoTitleValue: action.data
            })

        case "addTodo":
            return ({
                ...state,
                todos: [...state.todos, action.data]
            })
    }
    return state;
}