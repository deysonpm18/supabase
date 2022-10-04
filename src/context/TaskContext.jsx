import { createContext, useContext, useState } from "react";
import { Client } from "../supabase/Client";

export const TaskContext = createContext();

export const Usetasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("el usetask debe estar dentro de TaskContextProvider ");

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, settasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [Loading, setLoading] = useState(false);

  const getTasks = async (done = false) => {
    setLoading(true);

    const user = Client.auth.user();
    const { error, data } = await Client.from("task")
      .select()
      .eq("userId", user.id)
      .eq("done",done)
      .order("id", { asecendig: true });
    if (error) throw error;
    settasks(data);
    setLoading(false);
  };

  const creatTask = async (taskName) => {
    setAdding(true);

    try {
      const user = Client.auth.user();
      const { error, data } = await Client.from("task").insert({
        name: taskName,
        userId: user.id,
      });

      if (error) throw error;

      settasks([...tasks, ...data]);

      
    } catch (error) {
      console.log(error);
    }
    setAdding(false);
  };

  const deletetask = async (id) => {
    const user = Client.auth.user();

    const { error, data } = await Client.from("task")
      .delete()
      .eq("userId", user.id)
      .eq("id", id);

    if (error) throw error;
    settasks(tasks.filter((task) => task.id !== id));

    console.log(data);
  };

  const updateTask = async (id, upadatefields) => {
      const user = Client.auth.user();
      const {error,data} = await Client.from("task")
      .update(upadatefields)
      .eq("userId",user.id)
      .eq("id", id);

      if (error) throw error

      settasks(tasks.filter(task=> task.id !== id))
    
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        creatTask,
        adding,
        Loading,
        deletetask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
