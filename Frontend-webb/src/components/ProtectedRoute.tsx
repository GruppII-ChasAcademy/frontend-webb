import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserRole } from "../types/user.types"; // "admin" | "user"

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole; // valfri roll
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user, token } = useSelector((state: RootState) => state.auth);

  if (!token || !user) return <Navigate to="/login" replace />;

  if (role && user.role !== role) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
