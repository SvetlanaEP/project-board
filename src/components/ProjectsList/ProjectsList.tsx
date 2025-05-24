import { useAuthStore } from "../../app/store/store";
import { mockProjects } from "../../mock/projects";
import styles from './ProjectsList.module.scss'


const getStatusClass = (status: string) => {
  switch (status) {
    case "Срочно":
      return styles.urgent;
    case "В работе":
      return styles.inProgress;
    case "На проверке":
      return styles.review;
    default:
      return styles.waiting;
  }
}
export const ProjectsList = () => {
  const userId = useAuthStore((state) => state.user?.id);

  const visibleProjects = mockProjects.filter((project) =>
    project.access.includes(userId || "")
  );

  return (
    <div className={styles.wrapper}>

      {visibleProjects.length === 0 ? (
        <p>Нет доступных проектов.</p>
      ) : (
        visibleProjects.map((project) => (
          <div key={project.id}
          className={`${styles.card} ${getStatusClass(project.status)}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>Статус: {project.status}</small>
          </div>
        ))
      )}
    </div>
  );
};