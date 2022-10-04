import { useState } from "react";
import { Usetasks } from "../context/TaskContext";

function Taskfrom() {
  const [taskName, setTaskName] = useState("");
  const { creatTask, adding } = Usetasks();
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    creatTask(taskName)
    setTaskName("")
  };

  return (
    
      <form onSubmit={handleSubmit} className='card card-body'>
        <input
          type="text"
          name="taskName"
          placeholder="colocar tarea"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          className="from-control mb-2"
        
          />
          <div  className="bg-dark ms-auto" >

        <button disabled={adding} className="btn btn-primary btn-sm"
                  >{adding?'Agregando..':"Agregar tareas"}</button>
                  </div>
      </form>
   
  );
}

export default Taskfrom;
