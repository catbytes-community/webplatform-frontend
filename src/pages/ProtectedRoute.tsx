import { NotFoundPage } from "../pages/NotFoundPage";
import { useUser } from "../shared/lib/customHooks/useUser";

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const userIdFromLocalStorage = localStorage.getItem("userId") ? Number(localStorage.getItem("userId")) : null;
  const { user } = useUser(userIdFromLocalStorage);

  if (!user) {
    return <NotFoundPage />;
  }

  return element;
};
