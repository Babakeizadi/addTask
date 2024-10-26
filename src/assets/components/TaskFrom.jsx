import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

function TaskFrom({ title, setTasks }) {
  //-------------------------------------------------------use state

  let [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  //-------------------------------------------------------Functiopns
  const chaneTask = (e) => {
    let { name, value } = e.target;
    setTaskData((p) => {
      return { ...p, [name]: value };
    });
  };

  const selectTag = (title) => {
    if (taskData.tags.includes(title)) {
      let newArr = taskData.tags.filter((item) => item !== title);
      setTaskData((p) => {
        return { ...p, tags: newArr };
      });
    } else {
      setTaskData((p) => {
        return { ...p, tags: [...taskData.tags, title] };
      });
    }
  };
  // console.log(taskData);

  const selectedTag = (title) => {
    return taskData.tags.some((item) => item === title);
  };

  const addtask = (e) => {
    e.preventDefault();
    setTasks((p) => [...p, taskData]);
    setTaskData(() => {
      return { task: "", status: "todo", tags: [] };
    });
  };
  // console.log(taskData)
  //----------------------------------------------------------return
  return (
    <div className="hedear">
      <form action="" onSubmit={addtask}>
        <input
          type="text"
          className="task-input"
          placeholder="Add task..."
          onChange={chaneTask}
          name="task"
          value={taskData.task}
        />
        <div className="button-tags">
          <div>
            <Tag
              title="HTML"
              selectTag={selectTag}
              selected={selectedTag("HTML")}
            />
            <Tag
              title="CSS"
              selectTag={selectTag}
              selected={selectedTag("CSS")}
            />
            <Tag
              title="JS"
              selectTag={selectTag}
              selected={selectedTag("JS")}
            />
            <Tag
              title="PHP"
              selectTag={selectTag}
              selected={selectedTag("PHP")}
            />
          </div>

          <select name="status" id="" onChange={chaneTask} value={taskData.status}>
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default TaskFrom;
