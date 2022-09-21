import { connect } from 'react-redux'
import { deleteTodo } from '../../store/actions'
import './Render-todos.css'

function RenderTodos({ todos, removeTodo }) {

    return (
        <div>
            <h1>Render Todos</h1>

            <div>{todos.map((todo, index) => {
                return <div key={index}>
                    <li>{index + 1}: <h3>{todo.title}</h3><button onClick={() => removeTodo(todos, index)}>Delete</button></li>
                </div>
            })}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (todos, index) => dispatch(deleteTodo(todos, index))
})
export default connect(mapStateToProps, mapDispatchToProps)(RenderTodos);
