import { useProjectsStore } from "../../app/store/projectStore";
import styled from 'styled-components';

const ProjectCard = styled.div<{ status: string }>`
  border: 1px solid #ccc;
  padding: 1rem;
  border-left: 8px solid
    ${({ status }) =>
      status === 'Срочно' ? 'red' :
      status === 'В работе' ? 'orange' :
      status === 'На проверке' ? 'blue' : 'gray'};
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #fff;
`;

export const OrdersPage = () => {
  const { projects } = useProjectsStore()
  return (
    <div>
      <h1>📁 Ваши заказы </h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} status={project.status}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>Статус: {project.status}</small>
        </ProjectCard>
      ))}
    </div>
  )
}