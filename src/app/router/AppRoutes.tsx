import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "../../components/ProtectedRoute";
import { ExecutorDashboard } from "../../pages/executor/ExecutorDashboard";
import { ExecutorLayout } from "../../pages/executor/ExecutorLayout";
import { ProjectPage } from "../../pages/executor/ProjectsPage";
import { ChatPage } from "../../pages/executor/ChatPage";
import { StandardsPage } from "../../pages/executor/StandardsPage";
import { LoginPage } from "../../pages/LoginPage";
import { AdminPage } from "../../pages/AdminPage";
import { CustomerLayout } from "../../pages/customer/CustomerLayout";
import { CustomerDashboard } from "../../pages/customer/CustomerDashboard";
import { OrdersPage } from "../../pages/customer/OrdersPage";
import { SupportPage } from "../../pages/customer/SupportPage";

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/login"
      element={<LoginPage />}
    ></Route>

    <Route
      path="/customer"
      element={
        <ProtectedRoute allowedRoles={["customer"]}>
          <CustomerLayout />
        </ProtectedRoute>
      }
    >
      <Route
        index
        element={<CustomerDashboard />}
      />
       <Route
        path="orders"
        element={<OrdersPage />}
      />

      <Route
        path="support"
        element={<SupportPage />}
      />
      
    </Route>

    <Route
      path="/executor"
      element={
        <ProtectedRoute allowedRoles={["executor"]}>
          <ExecutorLayout />
        </ProtectedRoute>
      }
    >
      <Route
        index
        element={<ExecutorDashboard />}
      />
      <Route
        path="projects"
        element={<ProjectPage />}
      />
      <Route
        path="chat"
        element={<ChatPage />}
      />
      <Route
        path="standards"
        element={<StandardsPage />}
      />
    </Route>

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
