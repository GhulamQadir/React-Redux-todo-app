import { connect } from 'react-redux'
import './Render-todos.css'

function RenderTodos({ todos }) {
    console.log("render=>>", todos)

    return (
        <div>
            <h1>Render Todos</h1>

            <div>{todos.map((todo, index) => {
                return <div key={index}>
                    <li>{index}: <h3>{todo.title}</h3></li>
                </div>
            })}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(RenderTodos);
