import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskFrom from "./assets/components/TaskFrom";
import TaskColumn from "./assets/components/TaskColumn";
import { FaListUl } from "react-icons/fa6";
import { FaBarsProgress } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const oldTasks = localStorage.getItem("tasks1") || JSON.stringify([])
function App() {
  console.log(oldTasks);

  const [tasks, setTasks] = useState(JSON.parse(oldTasks));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // console.log(tasks);

  const removeTask = (index) => {
    const filteredTasks = tasks.filter((item, key) =>{key !== index});
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <TaskFrom setTasks={setTasks} />
      <div className="main">
        <TaskColumn
          title="todo"
          icon={<FaListUl color="red" />}
          tasks={tasks}
          status="todo"
          removeTask={removeTask}
        />
        <TaskColumn
          title="doing"
          icon={<FaBarsProgress color="blue" />}
          tasks={tasks}
          status="doing"
          removeTask={removeTask}
        />
        <TaskColumn
          title="done"
          icon={<FaCheck color="green" />}
          tasks={tasks}
          status="done"
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
