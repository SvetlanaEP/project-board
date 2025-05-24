import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CommonLayout } from "../../components/CommonLayout";
import { logout } from "../../redux/slices/authSlice";

const AdminMenu = [
  { path: '/admin', label: '🏠 Главная' },
  { path: '/admin/projects', label: '📁 Все проекты' },
  { path: '/admin/users', label: '👥 Пользователи' },
  { path: '/admin/reports', label: '📊 Отчёты' },
  { path: '/admin/notifications', label: '🔔 Уведомления' },
  { path: '/admin/activity', label: '📈 Активность' },
];

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <CommonLayout
      title="Админ-панель"
      menuItems={AdminMenu}
      onLogout={handleLogout}
    />
  );
};
