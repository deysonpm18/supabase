import { Client } from "../supabase/Client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Taskfrom from "../components/Taskfrom";
import TaskList from "../components/TaskList";

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Client.auth.user()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="row pt-4">
     
    <div className="col-md-4 offset-md-4">


    <Taskfrom />

      <header className="d-flex justify-content-between my-3">
        <span className="h5"> { showTaskDone? "tareas echas": 'tareas por realizar '}  </span>
        <button className="btn btn-dark btn-sm" 
        onClick={() => setShowTaskDone(!showTaskDone)}>
          {showTaskDone? 'tareas por hacer': 'realiazasdas'}
        </button>
      </header>
      <TaskList done={showTaskDone} />
    
    
    </div>
    
    </div>
  );
}

export default Home;
