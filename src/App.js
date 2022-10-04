import "./App.css";
import Navbar from "./components/Navbar"

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Nofaund from "./page/Nofound";
import { Client } from "./supabase/Client";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    Client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/Login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="App">
      <TaskContextProvider>
      <Navbar/>
       <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Nofaund />} />
        </Routes>
        </div> 
      </TaskContextProvider>
    </div>
  );
}

export default App;
