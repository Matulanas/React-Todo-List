import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todos.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }
    
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
            />
        </div>
    )
}

export default TodoList;
