import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput(''); 
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                    <input 
                    type="text" 
                    placeholder="Editar sua tarefa" 
                    value={input} 
                    text="text" 
                    className="todo-input-edit"
                    onChange={handleChange}
                    ref={inputRef}
                    />

                    <button className="todo-button-edit">Editar</button>
                </>
            ) : (
                <>
                    <input 
                    type="text" 
                    placeholder="Adicionar tarefa" 
                    value={input} 
                    text="text" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />

                    <button className="todo-button">Adicionar</button>
                </>
            )}

        </form>
    )
}

export default TodoForm;
