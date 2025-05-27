import styles from './ProjectCard.module.scss';
import { Project } from '../../mock/projects';

interface ProjectsCardProps {
  project: Project;
}

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Срочно':
      return styles.urgent;
    case 'В работе':
      return styles.inProgress;
    case 'На проверке':
      return styles.review;
    default:
      return styles.waiting;
  }
};

export const ProjectsCard = ({ project }: ProjectsCardProps) => {
  return (
    <div
      key={project.id}
      className={`${styles.card} ${getStatusClass(project.status)}`}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.date}>
          {new Date(project.createdAt).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.description}>{project.description}</p>
        <small className={styles.status}>Статус: {project.status}</small>
      </div>
    </div>
  );
};
