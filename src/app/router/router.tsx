import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { CustomerPage } from "../../pages/CustomerPage";
import { ExecutorDashboard } from "../../pages/executor/ExecutorDashboard";
import { ExecutorLayout } from "../../pages/executor/ExecutorLayout";
import { ProjectPage } from "../../pages/executor/ProjectsPage";
import { ChatPage } from "../../pages/executor/ChatPage";
import { StandardsPage } from "../../pages/executor/StandardsPage";

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
          <ExecutorLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<ExecutorDashboard />}/>
      <Route path="projects" element={<ProjectPage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="standarts" element={<StandardsPage />} />
    </Route>
  </Routes>
);
