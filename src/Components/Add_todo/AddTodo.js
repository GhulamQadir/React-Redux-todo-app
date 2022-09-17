import { connect } from 'react-redux'
import './AddTodo.css'
import { saveTodoValueOnChange, addTodo } from "../../store/actions";




function AddTodo({ title, todoValueOnChange, addNewTodo }) {
    let newTodo = { title: title }

    return (
        <div>
            <input onChange={(e) => todoValueOnChange(e.target.value)} type="text" placeholder="Enter todo" />
            <button onClick={() => {
                addNewTodo(newTodo)
            }}>Add Todo</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    title: state.todoTitleValue
})

const mapDispatchToProps = (dispatch) => ({
    todoValueOnChange: (value) => dispatch(saveTodoValueOnChange(value)),

    addNewTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
