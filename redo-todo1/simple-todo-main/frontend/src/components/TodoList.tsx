import React from "react";
import Todo from "./Todo";
import {TodoFilter, TodoItem} from "../Types";

interface Props {
    todos: TodoItem[];
    todoFilter: TodoFilter
}

const TodoList: React.FC<Props> = ({todos, todoFilter}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.filter(todo => {
                    switch (todoFilter) {
                        case 'all':
                            return true;
                        case 'completed':
                            return todo.completed;
                        case 'uncompleted':
                            return !todo.completed;
                    }
                }).map((todo) => (
                    <Todo
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
