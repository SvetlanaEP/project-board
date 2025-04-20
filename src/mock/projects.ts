export type ProjectStatus = 'Ожидание' | 'В работе' | 'На проверке' | 'Срочно'

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  access: string[]
}

export const mockProjects: Project[] = [

    {
      id: '1',
      title: 'Редизайн лендинга',
      description: 'Нужно внести правки по новому макету.',
      status: 'В работе',
      access: ['client1', 'executor2', 'admin']
      
    },
    {
      id: '2',
      title: 'Настройка формы',
      description: 'Форма не отправляется, нужно починить.',
      status: 'Срочно',
      access: ['admin', 'executor1'],
    },
    {
      id: '3',
      title: 'Презентация для клиента',
      description: 'Собрать инфу и сверстать в PDF.',
      status: 'Ожидание',
      access: ['admin', 'client1'],
    },
    {
      id: '4',
      title: 'Обновление документации',
      description: 'Добавить новые стандарты',
      status: 'На проверке',
      access: ['client', 'executor1', 'admin'],
    },

];