import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

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

  const handleEditMode = () => {
    if (!editMode && !todo.isDone) {
        setEditMode(!editMode);
      }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((x) => (x.id === id ? { ...x, todo: editTodo } : x)));
    setEditMode(false)
  };

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode])

  return (
    <form className="todos__single"  onSubmit={(e) => handleEdit(e, todo.id)} >
     {
     editMode ? <input ref={inputRef} placeholder="update ur value" value={editTodo} onChange={(e:ChangeEvent<HTMLInputElement>) => setEditTodo(e.target.value)}className="todos__single__text"></input> : 
     todo.isDone ? (
        <s className="todos__single__text">{todo.todo}</s>
      ) : (
        <span className="todos__single__text">{todo.todo}</span>
      )}
     

      {/* <span className='todos__single__text'>{todo.todo}</span> */}
      <div>
        <span
          className="icon"
          onClick={() =>  
            {
                handleEditMode()
            }
          } 
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDel(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleCard;
