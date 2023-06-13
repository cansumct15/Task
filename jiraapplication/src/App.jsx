import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContex from "./context/task";

function App() {

  const {fetchTasks}=useContext(TasksContex)
 
useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  );
}

export default App;
