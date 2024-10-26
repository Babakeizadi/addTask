import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn({ title, icon, tasks, status, removeTask }) {
  return (
    <section className="task-column">
      <h2>
        {icon}
        {title}
      </h2>
      {tasks.map((item, key) => {
        return (
          item.status === status && (
            <TaskCard key={key} task={item} removeTask={removeTask} index={key} />
          )
        );
      })}
    </section>
  );
}

export default TaskColumn;
