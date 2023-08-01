import {useState} from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useCollection, useQuery} from '@squidcloud/react';
import {TodoFilter, TodoItem} from './Types';

function App() {
    const [todoFilter, setTodoFilter] = useState<TodoFilter>("all");

    const collection = useCollection<TodoItem>('todos')
    const todos = useQuery(collection.query(), true)
    return (
        <div className="App">
            <header>
                <h1>Rudder's Todo List (with Squid)</h1>
            </header>
            <Form setTodoFilter={setTodoFilter}/>
            <TodoList
                todos={todos.map(i => i.data)}
                todoFilter={todoFilter}
            />
        </div>
    );
}

export default App;
