import React, {useState} from 'react';
import {TodoListItem} from "./TodoListItem";
import {AddTodo, Todo, ToggleTodo} from './types';
import {AddTodoForm} from "./AddTodoForm";
import './App.css';

const initialTodos: Array<Todo> = [
  { text: 'Walk with dog', complete: true },
  { text: 'Make App', complete: false }
]

function App() {
    const [ todos, setTodos ] = useState(initialTodos);

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if(todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }

    const addTodo: AddTodo = (text, image, audio) => {
        setTodos([ ...todos, { text, image, audio, complete: false}])
    }

  return (
      <>
          <AddTodoForm addTodo={addTodo}/>
          <ul className='todoListItems'>
              {
                  todos.map(todo => <TodoListItem key={todos.indexOf(todo)} todo={todo} toggleTodo={toggleTodo} />)
              }
          </ul>
    </>

  );
}

export default App;
