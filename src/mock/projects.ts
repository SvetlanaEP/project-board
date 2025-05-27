export type ProjectStatus = 'Ожидание' | 'В работе' | 'На проверке' | 'Срочно'

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  access: string[];
  createdAt: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Редизайн лендинга',
    description: 'Нужно внести правки по новому макету.',
    status: 'В работе',
    access: ['u2', 'u4', 'u1'], // client1, executor1, admin
    createdAt: '2025-05-22T09:30:00Z',
  },
  {
    id: '2',
    title: 'Настройка формы',
    description: 'Форма не отправляется, нужно починить.',
    status: 'Срочно',
    access: ['u1', 'u5'], // admin, executor2
    createdAt: '2025-05-24T14:10:00Z',
  },
  {
    id: '3',
    title: 'Презентация для клиента',
    description: 'Собрать инфу и сверстать в PDF.',
    status: 'Ожидание',
    access: ['u1', 'u3'], // admin, client2
    createdAt: '2025-05-20T17:45:00Z',
  },
  {
    id: '4',
    title: 'Обновление документации',
    description: 'Добавить новые стандарты',
    status: 'На проверке',
    access: ['u1', 'u2', 'u6'], // admin, client1, executor3
    createdAt: '2025-05-23T11:00:00Z',
  },
];
