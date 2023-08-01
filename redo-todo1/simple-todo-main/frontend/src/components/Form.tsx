import React, {ChangeEvent, FormEvent, useState} from "react";
import {TodoFilter, TodoItem} from "../Types";
import {useCollection} from "@squidcloud/react";

interface Props {
    setTodoFilter: (status: TodoFilter) => void;
}

const Form: React.FC<Props> = ({setTodoFilter}) => {
    const [inputText, setInputText] = useState("");

    const collection = useCollection<TodoItem>('todos')

    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!inputText?.trim()) return;
        const id = crypto.randomUUID();
        collection.doc(id).insert({text: inputText, completed: false, id}).then();
        setInputText("");
    };

    const todoFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setTodoFilter(e.target.value as TodoFilter);
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
                <select onChange={todoFilterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
