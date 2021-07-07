import React, { useEffect, useState } from "react";
import "./App.css";

//component imports
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    //run once on AppStart
    useEffect(() => {
        const getLocalSave = () => {
            let receivedTodos = localStorage.getItem("todos");
            if (receivedTodos) {
                setTodos(JSON.parse(receivedTodos));
            }
        };
        getLocalSave();
    }, []);

    //useEffect
    useEffect(() => {
        //declarations
        const saveToLocal = () => {
            localStorage.setItem("todos", JSON.stringify(todos));
        };

        //effects
        saveToLocal();
    }, [todos]);

    return (
        <div className="App">
            <header>
                <h1>TODO list</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setFilter={setFilter}
            />
            <TodoList filter={filter} todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
