export type Role = 'customer' | 'executor' | 'admin' | null

export interface User {
  id: string,
  username: string,
  name: string,
  role: Role,
}

export const mockUsers: User[] = [
  {
    id: 'u1',
    username: 'aa',
    name: 'Анна Админова',
    role: 'admin',
  },
  {
    id: 'u2',
    username: 'cc',
    name: 'Виктор Заказов',
    role: 'customer',
  },
  {
    id: 'u3',
    username: 'cc',
    name: 'Мария Клиентова',
    role: 'customer',
  },
  {
    id: 'u4',
    username: 'ee',
    name: 'Игорь Исполнитель',
    role: 'executor',
  },
  {
    id: 'u5',
    username: 'executor2',
    name: 'Наталья Делова',
    role: 'executor',
  },
  {
    id: 'u6',
    username: 'executor3',
    name: 'Артём Задачкин',
    role: 'executor',
  },
  {
    id: 'u7',
    username: 'a',
    name: 'Админ',
    role: 'admin',
  },
  {
    id: 'u8',
    username: 'e',
    name: 'Исполнитель',
    role: 'executor',
  },
  {
    id: 'u9',
    username: 'c',
    name: 'Заказчик',
    role: 'customer',
  },
]

