import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filter }) {
    let filteredTodos = todos.filter((item) => {
        if (filter === "all") {
            return true;
        }
        return (
            (item.completed && filter === "completed") ||
            (!item.completed && filter === "uncompleted")
        );
    });
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
