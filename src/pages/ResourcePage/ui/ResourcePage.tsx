import { useState, useEffect } from "react";
import { useUser } from "../../../shared/lib/customHooks/useUser";
import type { UserRole } from "../../../app/types/global";
import style from "./ResourcePage.module.css";
import Navbar from "../../../shared/ui/Navbar/Navbar";
import Footer from "../../../shared/ui/Footer/Footer";

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
      tags: ["react", "javascript"],
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
    return <div>Resource loading</div>;
  }

  if (!hasAccess()) {
    return (
      <div>
        <p>You don't have access to view this page</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] px-5 sm:px-10 mx-auto">
      <Navbar />
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold">{resource?.title}</h2>
      </div>

      <div className="flex justify-between mt-5 md:mt-9 gap-5 flex-wrap md:flex-nowrap">
        <div className="p-6 rounded-3xl w-full md:w-2/3 bg-white/40 shadow-[0_6px_10px_#ffa6ad66]">
          <p className="text-lg md:text-xl font-montserrat">
            {resource?.description}
          </p>
        </div>

        <div
          className={`${style.tagsContainer} justify-center md:justify-start w-full md:w-1/3 h-fit`}
        >
          {(resource.tags ?? []).map((tag) => (
            <span
              key={tag}
              className={`${style.tags} text-sm md:text-base font-medium font-montserrat`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
