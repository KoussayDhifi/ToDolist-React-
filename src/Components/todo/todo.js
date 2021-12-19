import {useState} from 'react';
import './todo.css';

const Todo = () => {
    //States
    const [input,setInput] = useState("");
    const [msg,setMsg] = useState("");
    //Functions for handling
    const Onwrite = (e) =>{
        var text = e.target.value;
        setInput(text);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('/add',{
            method:"post",
            headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
            body:JSON.stringify({
                "task":input
            })
        }).then(data=>data.json).then(data=>data.msg).catch(err=>console.error(err))
    
    }

    return (
        <>
        <h1>ToDoList</h1>
        <small><p>{msg}</p></small>
        <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={Onwrite}/><button type="submit">Add</button>
        </form>
        </>
    );


}

export default Todo;

