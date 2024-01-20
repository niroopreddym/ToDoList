import React, { useRef, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import ToDoList from "./components/ToDoList";

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
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
      
    </div>
  );
}

export default App;
