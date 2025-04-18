import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { CustomerPage } from "../../pages/CustomerPage";
import { ExecutorDashboard } from "../../pages/executor/ExecutorDashboard";

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<LoginPage />}
    ></Route>

    <Route
      path="/customer"
      element={
        <ProtectedRoute allowedRoles={["customer"]}>
          <CustomerPage />
        </ProtectedRoute>
      }
    ></Route>

    <Route
      path="/executor"
      element={
        <ProtectedRoute allowedRoles={['executor']}>
          <ExecutorDashboard />
        </ProtectedRoute>
      }
    ></Route>
  </Routes>
);
