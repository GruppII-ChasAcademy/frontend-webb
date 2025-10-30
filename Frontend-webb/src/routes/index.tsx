import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../routes/Login";
import Dashboard from "./dashboard";
import Admin from "../routes/Admin";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <Admin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
