import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>ToDo</h1>
      <input type="text" placeholder="New todo" v-model="newTodo"></input>

      <ul id="todo">
        <li>
          <p>Hello!</p>
        </li>
      </ul >

      <ul id="done">
        <li>
          <p></p>
          <span>X</span >
        </li >
      </ul >
    </main >
  );
}

export default App;
