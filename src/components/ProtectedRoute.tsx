import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {
  children: ReactNode;
  allowedRoles: ('customer' | 'executor' | 'admin')[];
}

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const role = useSelector((state: RootState) => state.auth.user?.role);

  if (!role) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <div>Нет доступа</div>;
  }

  return <>{children}</>;
};
