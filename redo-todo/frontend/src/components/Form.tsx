import React, { ChangeEvent, FormEvent } from "react";

interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

interface Props {
  setInputText: (text: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  inputText: string;
  setStatus: (status: string) => void;
}

const Form: React.FC<Props> = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
}) => {
  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
