import styles from "./SideBar.module.css";


export default function SideBar({ onAddProjClick, projects, selectedId }) {

  return (
    <aside className={styles.sidebar}>
      <h1>Projects</h1>
      <button onClick={onAddProjClick}>+ Add Project</button>
      <ul>
        {projects.map((proj) => {
          return (
            <li key={proj.id}>
              <button onClick={() => selectedId(proj.id)}>{proj.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
