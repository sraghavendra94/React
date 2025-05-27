import { useRef } from "react";
import Input from "./Input.jsx";


export default function NewTask({handleAddTask}) {
const task = useRef();
  return (
    <div className="container">
      <Input ref = {task} label="Task" textarea={false} />
      <button onClick={() => handleAddTask(task.current.value)} className="btn">Add Task</button>
    </div>
  );
}
