import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskCreate from "./components/TaskCreate";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        {/* <NavLink to={"/"}>Home</NavLink> */}
        <NavLink to={"/tasks"}>Tasks</NavLink>
        <NavLink to={"/tasks/create"}>Create a Task</NavLink>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/create" element={<TaskCreate />} />
      </Routes>
    </>
  );
}

export default App;
