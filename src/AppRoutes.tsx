import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { PerformerPage } from "./pages/PerformerPage"
import { CustomerPage } from "./pages/CustomerPage"
import { AdminPage } from "./pages/AdminPage"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/"
      element={
        <ProtectedRoute allowedRoles={['customer']}>
          <CustomerPage />
        </ProtectedRoute>
      }>
      </Route>

      <Route path="/performer" element={
        <ProtectedRoute allowedRoles={['performer']}>
          <PerformerPage />
        </ProtectedRoute>
      }>
      </Route>

      <Route path="/admin"
      element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminPage />
        </ProtectedRoute>
      }>

      </Route>

    </Routes>
  )
}