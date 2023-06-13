import { useState } from "react";
import { useContext } from "react";
import TasksContex from "../context/task";

function TaskCreate({ task, taskformUpdate,onUpdate}) {
  const {editTaskById , createTask} = useContext(TasksContex);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDecs, setTaskDecs] = useState(task ? task.taskDecs : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDecs(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDecs);
      // editTaskById(task.id, title, taskDecs);

    } else {
      createTask(title, taskDecs);
    }

    setTitle("");
    setTaskDecs("");
  };
  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDecs}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDecs}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
