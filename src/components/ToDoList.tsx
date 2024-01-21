import React from "react";
import { Todo } from "./model";
import SingleCard from "./singlecard";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return <div className="todos"><ul>
  {
    todos.map((x: Todo) => (
    <SingleCard todo={x} key={x.id} todos={todos} setTodos={setTodos}></SingleCard>
    ))
  }
  </ul></div>;
};

export default ToDoList;
