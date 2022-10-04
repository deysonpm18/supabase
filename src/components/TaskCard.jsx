
import {Usetasks} from "../context/TaskContext"

function TaskCard({task}) {


    const {deletetask,updateTask }= Usetasks() 
    const handleDelete= ()=>{
        deletetask(task.id)
    };

    const handleToggleDone =()=>{
        updateTask( task.id,{done:true})
    }



  return (
    <div className="card card-body mb-2">
          <h1 className="h5">{task.name}</h1>
          <span>{task.done ? "realizada" : "no realizada"}</span>
          <div className="ms-auto">
            <button className="btn btn-danger btn-sm me-1"
            onClick={()=>handleDelete()} >eleminar</button>
            <button onClick={()=>handleToggleDone()}
            className=" btn btn-secondary bnt=sm "
            
            >listo</button>
          </div>
          
        </div>
  )
}

export default TaskCard