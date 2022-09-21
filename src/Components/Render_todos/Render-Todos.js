import { connect } from 'react-redux'
import { useState } from 'react'
import { deleteTodo, editTodoInput, updateTodo } from '../../store/actions'
import './Render-todos.css'

function RenderTodos({ todos, removeTodo, todoInputOnEdit, editTodo }) {
    const [todoUpdateValue, setTodoUpdateValue] = useState()

    const updatedTodoValueOnChange = (e) => {
        setTodoUpdateValue(e.target.value)
        console.log(e.target.value)
    }

    const setValue = (todos, index) => {
        setTodoUpdateValue(todos[index].title)
        console.log(todoUpdateValue)
    }

    return (
        <div>
            <h1>Render Todos</h1>

            <div>{todos.map((todo, index) => {
                return <div key={index}>
                    <li>{todos[index].isEdit ? <input placeholder='Enter value' onChange={(e) => updatedTodoValueOnChange(e)} defaultValue={todos[index].title} type="text" /> : <p>{index + 1}: <h3>{todo.title}</h3></p>}
                        {todos[index].isEdit ? <button onClick={() => editTodo(todos, index, todoUpdateValue)
                        }>Update</button> : <button onClick={() => {
                            todoInputOnEdit(todos, index)
                            setValue(todos, index)
                        }}>Edit</button>}
                        <button onClick={() => removeTodo(todos, index)}>Delete</button></li>
                </div>
            })}</div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (todos, index) => dispatch(deleteTodo(todos, index)),
    todoInputOnEdit: (todos, index) => dispatch(editTodoInput(todos, index)),
    editTodo: (todos, index, updatedTodoValue) => dispatch(updateTodo(todos, index, updatedTodoValue))

})
export default connect(mapStateToProps, mapDispatchToProps)(RenderTodos);
