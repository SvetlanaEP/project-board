import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../app/store/store";

interface Props {
  children: ReactNode;
  allowedRoles: ("customer" | "executor" | "admin")[];
}

export const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const role = useAuthStore((state) => state.role);

  if (!role) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (!allowedRoles.includes(role)) {
    return <div>Нет доступа</div>;
  }

  return <>{children}</>;
};
