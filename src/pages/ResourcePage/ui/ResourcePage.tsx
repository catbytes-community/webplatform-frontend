import { useState, useEffect } from "react";
import { useUser } from "../../../shared/lib/customHooks/useUser";
import type { UserRole } from "../../../app/types/global";

type Audience = "public" | "mentor" | "member";

type Resource = {
  id: string;
  title: string;
  type: string;
  audience: Audience[];
  description: string;
  tags: string[] | null;
};

export default function ResourcePage() {
  const userIdFromLocalStorage = localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null;
  const { user } = useUser(userIdFromLocalStorage);
  const [resource, setResource] = useState<Resource | null>(null);

  useEffect(() => {
    // TODO: fetch resource from API
    const fetchedResource: Resource = {
      id: crypto.randomUUID(),
      title: "Test resource",
      type: "post",
      audience: ["mentor"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      tags: null,
    };

    setResource(fetchedResource);
  }, []);

  const hasAccess = () => {
    if (!resource) return false;

    if (resource.audience.includes("public")) {
      return true;
    }

    if (!user) {
      return false;
    }

    const userRoles = user.roles.map((r) => r.role_name);
    if (userRoles.includes("admin")) return true;

    return resource.audience.some((requiredRole) => {
      return userRoles.includes(requiredRole as UserRole);
    });
  };

  if (!resource) {
    return <div>Resource not found</div>;
  }

  if (!hasAccess()) {
    return (
      <div>
        <p>You don't have access to view this page</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>Resource Page</p>
      </div>
    </div>
  );
}
