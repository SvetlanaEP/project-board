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
    username: 'admin',
    name: 'Анна Админова',
    role: 'admin',
  },
  {
    id: 'u2',
    username: 'client1',
    name: 'Виктор Заказов',
    role: 'customer',
  },
  {
    id: 'u3',
    username: 'client2',
    name: 'Мария Клиентова',
    role: 'customer',
  },
  {
    id: 'u4',
    username: 'executor1',
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
    id: 'u4',
    username: 'a',
    name: 'Админ',
    role: 'admin',
  },
  {
    id: 'u5',
    username: 'e',
    name: 'Исполнитель',
    role: 'executor',
  },
  {
    id: 'u6',
    username: 'c',
    name: 'Заказчик',
    role: 'customer',
  },
]
