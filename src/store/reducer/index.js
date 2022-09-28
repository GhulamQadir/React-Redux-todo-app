const initialState = {
    todos: [{ title: "First todo", isEdit: false, isTodoChecked: false }, { title: "redux learning", isEdit: false, isTodoChecked: false }],
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
                todos: [...action.data],
            })

        case "editTodo":
            return ({
                ...state,
                todos: [...action.data],
            })


        case "updateTodo":
            return ({
                ...state,
                todos: [...action.data],
            })


        case "isTodoChecked":
            return ({
                ...state,
                todos: [...action.data],
            })


    }
    return state;
}