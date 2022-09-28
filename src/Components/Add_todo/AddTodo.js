import { connect } from 'react-redux'
import './AddTodo.css'
import { addTodo } from "../../store/actions";
import { useState, useEffect } from 'react';




function AddTodo({ todos, addNewTodo }) {
    const [todoValue, setTodoValue] = useState("")
    const todoValueOnChange = (value) => {
        setTodoValue(value)
    }

    const addTodo = () => {
        addNewTodo(todoValue)
        localStorage.setItem("todos", JSON.stringify(todos))
        setTodoValue("")
    }

    useEffect(() => {
        todos = JSON.parse(localStorage.getItem('todos'))
        console.log("ma=>>", todos)
    }, [])


    return (
        <div>
            <input onChange={(e) => todoValueOnChange(e.target.value)} type="text" value={todoValue} placeholder="Enter todo" />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({

    addNewTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
