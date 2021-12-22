import { useEffect,useState } from "react";
import './tasks.css'

const Task = () => {

    const [tasks,setTasks] = useState([])
    const [checked,setChecked] = useState(false)
    
    useEffect (()=>{
            fetch('/getlist').then(res=>res.json()).then(data=>setTasks(data.Done)).catch(err=>console.error(err))
    },[tasks])

    const key = (e) => {
        var id = e.target.id
        fetch(`/delete/${id}`)
    }
    
    return(
        <div>
            {tasks.map((items)=>{
                return(
                    <div key={items.id} className="todos">
                    <label><h3>{items.content}</h3></label><input type="checkbox" id={items.id} onClick={key}/>
                    </div>
                )
            })}

        </div>
    )

}

export default Task;