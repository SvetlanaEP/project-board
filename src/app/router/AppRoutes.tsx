import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "../../components/ProtectedRoute";
import { ExecutorDashboard } from "../../pages/executor/ExecutorDashboard";
import { ExecutorLayout } from "../../pages/executor/ExecutorLayout";
import { ExecutorProjectPage } from "../../pages/executor/ExecutorProjectsPage";
import { ChatPage } from "../../pages/executor/ChatPage";
import { StandardsPage } from "../../pages/executor/StandardsPage";
import { LoginPage } from "../../pages/LoginPage";
import { CustomerLayout } from "../../pages/customer/CustomerLayout";
import { CustomerDashboard } from "../../pages/customer/CustomerDashboard";
import { OrdersPage } from "../../pages/customer/OrdersPage";
import { SupportPage } from "../../pages/customer/SupportPage";
import { AdminLayout } from "../../pages/admin/AdminLayout";
import { AdminDashboard } from "../../pages/admin/AdminDashboard";
import { ProjectsAdminPage } from "../../pages/admin/ProjectsAdminPage";
import { UsersPage } from "../../pages/admin/UsersPage";
import { ReportsPage } from "../../pages/admin/ReportsPage";
import { NotificationsPage } from "../../pages/admin/NotificationsPage";
import { ActivityPage } from "../../pages/admin/ActivityPage";

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
        element={<ExecutorProjectPage />}
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
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route 
        index
        element={<AdminDashboard />}
      />
      <Route 
        path="projects"
        element={<ProjectsAdminPage />}
      />

      <Route 
        path="users"
        element={<UsersPage />}
      />
      <Route 
        path="reports"
        element={<ReportsPage />}
      />
      <Route 
      path="notifications"
      element={<NotificationsPage />}
      />
      <Route 
        path="activity"
        element={<ActivityPage />}
      />

    </Route>
  </Routes>
);
