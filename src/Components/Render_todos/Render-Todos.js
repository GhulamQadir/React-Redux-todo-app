import { connect } from 'react-redux'
import { useState } from 'react'
import { deleteTodo, editTodoInput, todoChecked, updateTodo } from '../../store/actions'
import './Render-todos.css'

function RenderTodos({ todos, removeTodo, todoInputOnEdit, editTodo, isTodoCompleted }) {
    const [todoUpdateValue, setTodoUpdateValue] = useState("")
    const [todoCheck, isTodoCheck] = useState(false)

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
                    <li>
                        <input onClick={() => { }} checked={todos[index].isTodoChecked} type="radio" onChange={(e) => isTodoCompleted(todos, index, e.target.checked)} />
                        {todos[index].isEdit ? <input placeholder='Enter value' onChange={(e) => updatedTodoValueOnChange(e)} defaultValue={todos[index].title} type="text" /> : <h3 className={todos[index].isTodoChecked ? "todoChecked" : "todo"}>{todo.title}</h3>}
                        {todos[index].isEdit ? <button onClick={() => editTodo(todos, index, todoUpdateValue)
                        }>Update</button>
                            :
                            <button disabled={todos[index].isTodoChecked ? true : false} onClick={() => {
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
    editTodo: (todos, index, updatedTodoValue) => dispatch(updateTodo(todos, index, updatedTodoValue)),
    isTodoCompleted: (todos, index, value) => dispatch(todoChecked(todos, index, value))
})
export default connect(mapStateToProps, mapDispatchToProps)(RenderTodos);
