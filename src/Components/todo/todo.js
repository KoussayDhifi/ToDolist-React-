import {useState} from 'react';
import './todo.css';

const Todo = () => {
    //States
    const [input,setInput] = useState("");

    //Functions for handling
    const Onwrite = (e) =>{
        var text = e.target.value;
        setInput(text);
    }


    return (
        <>
        <h1>ToDoList</h1>
        <form>
        <input type="text" value={input} onChange={Onwrite}/><button type="submit">Add</button>
        </form>
        </>
    );


}

export default Todo;

