import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { CommonLayout } from '../../components/CommonLayout';

const executorMenu = [
  { path: '/executor', label: '🏠 Главная' },
  { path: '/executor/projects', label: '📁 Проекты' },
  { path: '/executor/chat', label: '💬 Чат' },
  { path: '/executor/standards', label: '📄 Стандарты' },
];


export const ExecutorLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

const handleLogout = () => {
  dispatch(logout())
  navigate('/login');
};
  return (
    <CommonLayout title='Меню исполнителя' menuItems={executorMenu} onLogout={handleLogout} />
  );
};
