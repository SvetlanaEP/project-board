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
      access: ['c', 'e', 'a']
      
    },
    {
      id: '2',
      title: 'Настройка формы',
      description: 'Форма не отправляется, нужно починить.',
      status: 'Срочно',
      access: ['a', 'e'],
    },
    {
      id: '3',
      title: 'Презентация для клиента',
      description: 'Собрать инфу и сверстать в PDF.',
      status: 'Ожидание',
      access: ['a', 'c'],
    },
    {
      id: '4',
      title: 'Обновление документации',
      description: 'Добавить новые стандарты',
      status: 'На проверке',
      access: ['c', 'e', 'a'],
    },

];