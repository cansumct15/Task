import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContex from "../context/task";

function TaskShow ({ task }) {
    const { deleteTaskById,editTaskById } = useContext(TasksContex);
const [showEdit, setShowEdit] = useState(false);

 const handleDeleteClick=()=>{
   // onDelete(task.id)
   deleteTaskById(task.id);
 };
    const handleEditClick=()=>{
     setShowEdit(!showEdit);
     
    };

    const handleSubmit=(id,updatedTitle,updatedTaskDecs)=>{
        setShowEdit(false);
      editTaskById(id,updatedTitle,updatedTaskDecs);
       }; 
    
    console.log(task);
 
    return (<div className="task-show"> 

         {showEdit ?(
         <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
         ):(
         <div>
         <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.taskDecs}</p>
        <div>
            <button onClick={handleDeleteClick} className="task-delete">Sil</button>
            <button onClick={handleEditClick} className="task-edit">Güncelle</button>


         </div>
         </div> 

    )}
       
</div>


         
)}

export default TaskShow;