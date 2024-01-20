import React, { useRef, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false} ]);
      setTodo("");
    }

     inputRef.current?.blur();
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} inputRef={inputRef}></InputField>
      <ul>
      {
        todos.map((x: Todo) => (
          <li>{x.todo}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
