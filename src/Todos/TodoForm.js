import { useState } from "react";
import "./TodoForm.css"

function TodoForm({ onAdd }) {

    const [text, setText] = useState("")
    return (
        <form className="todoAppForm" onSubmit={(e) => {
            e.preventDefault();
            if (text !== "") {
                onAdd(text);
                setText("");
            }
        }}>
            <input className="todoInput" type="text" value={text} onChange={(evt) => {
                setText(evt.target.value)
            }}></input>
            <button className="todoAddButton">Add</button>
        </form>
    )
}

export default TodoForm;