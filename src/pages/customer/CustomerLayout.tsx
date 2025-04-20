import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../app/store/store';
import { CommonLayout } from '../../components/CommonLayout';

const clientMenu = [
  { path: '/client', label: '🏠 Главная' },
  { path: '/client/orders', label: '📋 Заказы' },
  { path: '/client/support', label: '🛠 Поддержка' },
];
export const CustomerLayout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <CommonLayout title='Меню заказчика' menuItems={clientMenu} onLogout={handleLogout}/>
  )
}