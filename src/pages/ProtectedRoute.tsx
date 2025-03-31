import { NotFoundPage } from "../pages/NotFoundPage";
import { useState, useEffect } from "react";

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user") as string);
      console.log("user", user);
      type Role = {
        role_id: number;
        role_name: string;
      };
      if (user.roles.some((r: Role) => r.role_name === "mentor")) {
        setIsAuthorised(true);
      }
    }
  }, []);

  if (!isAuthorised) {
    return <NotFoundPage />;
  }

  return element;
};
