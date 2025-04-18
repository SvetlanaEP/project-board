import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ExecutorDashboard } from "./pages/executor/ExecutorDashboard";
import { CustomerPage } from "./pages/CustomerPage";
import { AdminPage } from "./pages/AdminPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      ></Route>

      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <CustomerPage />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/executor"
        element={
          <ProtectedRoute allowedRoles={["executor"]}>
            <ExecutorDashboard />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPage />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};
