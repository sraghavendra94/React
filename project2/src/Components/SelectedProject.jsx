import { useState } from "react";
import Task from "./Task.jsx";

export default function SelectedProject({project, handleAddTask, tasks, handleRemoveTask}) {


  return (
    <div className="selectedProject">
      <h4>Project    :{project.title}</h4>
      <h4>Description: {project.description}</h4>
      <h4>Due Date   : {project.dueDate}</h4>
      <Task handleAddTask = {handleAddTask} />
      <section>
        <ul>
            {tasks.length === 0 && <p>There are no tasks.</p>}
            {tasks.length > 0 && tasks.map((item) => {
                return(<> <li key={item.taskId}> {item.task}</li>
                    <button onClick={() => handleRemoveTask(item.taskId)}>Clear</button></>
                )
            })}
        </ul>
      </section>
    </div>
  );
}
