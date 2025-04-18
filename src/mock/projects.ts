export type ProjectStatus = 'waiting' | 'inProgress' | 'review' | 'urgent'

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus
}

export const mockProjects: Project[] = [
  { id: '1', title: 'Редизайн сайта', status: 'waiting' },
  { id: '2', title: 'Подключение оплаты', status: 'inProgress' },
  { id: '3', title: 'Тестирование API', status: 'review' },
  { id: '4', title: 'Срочная правка логотипа', status: 'urgent' },
  { id: '5', title: 'Настройка аналитики', status: 'inProgress' },
];