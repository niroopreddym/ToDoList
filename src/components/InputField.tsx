import React, { ChangeEvent} from "react";
import "./styles.css";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>
}



const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd, inputRef}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
   
  };

  console.log(todo);


  return (
    <form className="input" onSubmit={handleAdd}>
      <input
      ref={inputRef}
        type="input"
        value={todo}
        onChange={handleChange}
        placeholder="Enter a task"
        className="input__box"
      ></input>
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
