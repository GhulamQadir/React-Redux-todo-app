import { connect } from 'react-redux'
import './AddTodo.css'
import { addTodo } from "../../store/actions";
import { useState } from 'react';




function AddTodo({ addNewTodo, }) {
    const [todoValue, setTodoValue] = useState("")
    const todoValueOnChange = (value) => {
        setTodoValue(value)
    }

    const addTodo = () => {
        addNewTodo(todoValue)
        setTodoValue("")
    }

    return (
        <div>
            <input onChange={(e) => todoValueOnChange(e.target.value)} type="text" value={todoValue} placeholder="Enter todo" />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodo);
