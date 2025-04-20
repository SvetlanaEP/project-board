import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../app/store/store';
import { CommonLayout } from '../../components/CommonLayout';

const clientMenu = [
  { path: '/customer', label: '🏠 Главная' },
  { path: '/customer/orders', label: '📋 Заказы' },
  { path: '/customer/support', label: '🛠 Поддержка' },
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