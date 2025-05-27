import { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import AddProject from "./Components/AddProject.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  let content;

  function handleAddproject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function saveProjectDetails(project) {
    setProjectState((prev) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function saveTaskDetails(task) {
    setProjectState((prev) => {
      const newTask = {
        selectedProjectId: projectState.selectedProjectId,
        task: task,
        taskId : Math.random()
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }


  function handleRemoveTask(taskId){
    setProjectState((prev) => {
      
      return{
        ...prev,
        
        tasks : prev.tasks.filter((task) => task.taskId !== taskId)
      }
    })
  }


  let tasks = projectState.tasks.filter(item => item.selectedProjectId === projectState.selectedProjectId)

  let value = projectState.projects.find(
    (item) => item.id === projectState.selectedProjectId
  );

  content = <SelectedProject project={value} handleAddTask={saveTaskDetails} tasks = {tasks} handleRemoveTask = {handleRemoveTask}/>;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProjClick={handleAddproject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={saveProjectDetails} />;
  }

  console.log(projectState);
  return (
    <div className="App">
      <div id="main-root"></div>
      <div className="container">
        <SideBar
          onAddProjClick={handleAddproject}
          projects={projectState.projects}
          selectedId={handleSelectedProject}
        />
        {content}
      </div>
    </div>
  );
}

export default App;
