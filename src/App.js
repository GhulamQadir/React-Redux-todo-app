import './App.css';
import AddTodo from './Components/Add_todo/AddTodo';
import RenderTodos from './Components/Render_todos/Render-Todos';


function App() {
  return (
    <div className="App">
      <h1>React Redux todo app</h1>

      <AddTodo />
      <br />
      <br />
      <br />
      <RenderTodos />

    </div>
  );
}

export default App;