import projectImg from "../project.png";

export default function NoProjectSelected({onAddProjClick}) {
  return (
    <section className="no-project">
      <img src={projectImg} alt="Project Image" />
      <h3>There is no Project Selected</h3>
      <button onClick={onAddProjClick}>Create New Project</button>
    </section>
  );
}
