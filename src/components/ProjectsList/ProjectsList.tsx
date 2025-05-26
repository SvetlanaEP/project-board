import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './ProjectsList.module.scss';
import { useState } from 'react';

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

export const ProjectsList = () => {
  const [statusFilter, setStatusFilter] = useState('Все');
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const projects = useSelector((state: RootState) => state.projects.projects ?? []);

  const visibleProjects = projects
    .filter((project) => project.access.includes(userId || ''))
    .filter((project) => statusFilter === 'Все' || project.status === statusFilter);

  const statusOptions = ['Все', 'Срочно', 'В работе', 'На проверке', 'Ожидание'];

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterWrapper}>
        <label>
          Фильтр по статусу:{' '}
          <select
            className={styles.statusFilter}
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
            }}
          >
            {statusOptions.map((status) => {
              return (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      {visibleProjects.length === 0 ? (
        <p>Нет доступных проектов.</p>
      ) : (
        visibleProjects.map((project) => (
          <div
            key={project.id}
            className={`${styles.card} ${getStatusClass(project.status)}`}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>Статус: {project.status}</small>
          </div>
        ))
      )}
    </div>
  );
};
