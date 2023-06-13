import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContex = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDecs) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDecs,
    });

    console.log(response);

    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    debugger;
    setTasks(response.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDecs) => {
    const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDecs: updatedTaskDecs,
    });
    
    const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { id, title: updatedTitle, taskDecs: updatedTaskDecs };
        }
        return task;
      });
  
      setTasks(updatedTasks);
    };
  
    const sharedValuesAndMethods={
        tasks,
        createTask,
        fetchTasks,
        deleteTaskById,
        editTaskById,
    }
  return <TasksContex.Provider value={sharedValuesAndMethods}>{children}</TasksContex.Provider>;
}

export { Provider };
export default TasksContex;
