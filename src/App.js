import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([[]]);

  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form data
    const newTodo = event.target.newtodo.value;

    console.log(newTodo);
  }

  return (
    <main>
      <h1>ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newtodo" placeholder="New todo" v-model="newTodo"></input>
      </form>
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
