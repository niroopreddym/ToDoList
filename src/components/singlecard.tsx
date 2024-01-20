import React, { ChangeEvent, useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import InputField from "./InputField";

type Props = {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleCard: React.FC<Props> = ({ todo, key, todos, setTodos }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string | number>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((x) => (x.id === id ? { ...x, isDone: true } : x)));
  };

  const handleDel = (id: number) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  const handleEdit = (id: number) => {
    if (!editMode && !todo.isDone) {
      setEditMode(!editMode);
    }
  };
  return (
    <form className="todos__Single">
      {/* edit ? (<input type="text" placeholder="update the value" value={editTodo}/>): */}
      {todo.isDone ? (
        <s className="todos__single__text">{todo.todo}</s>
      ) : (
        <span className="todos__single__text">{todo.todo}</span>
      )}

      {/* <span className='todos__single__text'>{todo.todo}</span> */}
      <div>
        <span
          className="icon"
          onClick={() => {
            handleEdit(todo.id);
          }}
        >
          <AiFillEdit />\
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDel(todo.id);
          }}
        >
          <AiFillDelete />\
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />\
        </span>
      </div>
    </form>
  );
};

export default SingleCard;
