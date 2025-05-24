import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CommonLayout } from '../../components/CommonLayout';
import { logout } from '../../redux/slices/authSlice';

const clientMenu = [
  { path: '/customer', label: '🏠 Главная' },
  { path: '/customer/orders', label: '📋 Заказы' },
  { path: '/customer/support', label: '🛠 Поддержка' },
];

export const CustomerLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <CommonLayout
      title='Меню заказчика'
      menuItems={clientMenu}
      onLogout={handleLogout}
    />
  );
};
