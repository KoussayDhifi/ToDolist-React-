import { useEffect,useState } from "react";

const Task = () => {

    const [tasks,setTasks] = useState([])

    
    useEffect (()=>{
            fetch('/getlist').then(res=>res.json()).then(data=>setTasks(data.Done)).catch(err=>console.error(err))
    },[])
    
    
    return(
        <>
            {tasks.map((items)=>{
                return(
                    <h1 key={items.id}>{items.content}</h1>
                )
            })}

        </>
    )

}

export default Task;