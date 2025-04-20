import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../app/store/store';
import { CommonLayout } from '../../components/CommonLayout';

const executorMenu = [
  { path: '/executor', label: '🏠 Главная' },
  { path: '/executor/projects', label: '📁 Проекты' },
  { path: '/executor/chat', label: '💬 Чат' },
  { path: '/executor/standards', label: '📄 Стандарты' },
];


export const ExecutorLayout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

const handleLogout = () => {
  logout();
  navigate('/login');
};
  return (
    <CommonLayout title='Меню исполнителя' menuItems={executorMenu} onLogout={handleLogout} />
  );
};
