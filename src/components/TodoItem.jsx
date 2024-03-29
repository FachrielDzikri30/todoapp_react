/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { TodoContext } from './TodoApp'

const TodoItem = ({todo}) => {

    const {toggleCompleted, deleteTodo} = useContext(TodoContext)

    const getTodoTitleStyle = () => {
        if (todo.completed===true){
            return {textDecoration: 'line-through'}
        } else {
            return {textDecoraation: 'none'}
        }
    }

    return (
    <div style={styles.todoItem}>
        <input 
            type="checkbox" 
            style={styles.checkbox}
            onChange={() => toggleCompleted(todo.id)}
        />
        <p style={getTodoTitleStyle()}>{todo.title}</p>
        <button
            style={styles.button}
            onClick={() => deleteTodo(todo.id)}
        >X</button>
    </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
    },
    checkbox: {
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#bb0000',
        color: '#ffffff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
    }
}

export default TodoItem