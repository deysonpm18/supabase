import { Usetasks } from "../context/TaskContext";
import { useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskList({done= false}) {
  const { tasks, getTasks, Loading } = Usetasks();

  useEffect(() => {
    getTasks(done);
  }, [done]);
  if (Loading) {
    return <p>loading...</p>;
  } else if(tasks.length=== 0) {
return <p> no hay tareas </p>

  }


  else {
    return (
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}  />
        ))}
      </div>
    );
  }
}

export default TaskList;
