import React from "react";
import {TodoItem} from "../Types";
import {useCollection} from "@squidcloud/react";

interface Props {
    text: string;
    todo: TodoItem;
}

const Todo: React.FC<Props> = ({text, todo}) => {
    const collection = useCollection<TodoItem>('todos')

    const deleteHandler = () => {
        collection.doc(todo.id).delete().then();
    };

    const completeHandler = () => {
        collection.doc(todo.id).update({completed: !todo.completed}).then();
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
