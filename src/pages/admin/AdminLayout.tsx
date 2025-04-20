import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../app/store/store";
import { CommonLayout } from "../../components/CommonLayout"

const AdminMenu = [
  { path: '/admin', label: '🏠 Главная' },
  { path: '/admin/projects', label: '📁 Все проекты' },
  { path: '/admin/users', label: '👥 Пользователи' },
  { path: '/admin/reports', label: '📊 Отчёты' },
  { path: '/admin/notifications', label: '🔔 Уведомления' },
  { path: '/admin/activity', label: '📈 Активность' },
];

export const AdminLayout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <CommonLayout title="Админ-панель" menuItems={AdminMenu} onLogout={handleLogout}></CommonLayout>
  )
}