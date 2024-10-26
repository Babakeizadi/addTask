import React from "react";
import Tag from "./Tag";
import { FaRegTrashCan } from "react-icons/fa6";
import "./TaskCard.css";

function TaskCard({ task, removeTask, index }) {
  // console.log(task);

  
  return (
    <div className="task-card">
      <h3>{task.task}</h3>
      <div className="tag-line">
        <div className="task-tags">
          {task.tags.map((item, key) => (
            <Tag key={key} title={item} />
          ))}
        </div>
        <FaRegTrashCan onClick={() => removeTask(index)} />
      </div>
    </div>
  );
}

export default TaskCard;
