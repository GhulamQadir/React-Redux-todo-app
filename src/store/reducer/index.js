const initialState = {
    todos: [{ title: "First todo" }, { title: "redux learning" }],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "addTodo":
            return ({
                ...state,
                todos: [...state.todos, action.data],
            })

        case "deleteTodo":
            return ({
                ...state,
                todos: action.data,
            })
    }
    return state;
}