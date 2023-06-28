import React from "react";
import Todo from "./Todo";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  filteredTodos: TodoItem[];
}

const TodoList: React.FC<Props> = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
