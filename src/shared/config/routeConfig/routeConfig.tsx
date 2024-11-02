import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { MainPage } from "../../../pages/MainPage";
import { AboutPage } from "../../../pages/AboutPage";
import { AllProjectsPage } from "../../../pages/AllProjectsPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  ALL_PROJECTS = "projects",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.ALL_PROJECTS]: "/projects",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.ALL_PROJECTS]: {
    path: RoutePath.projects,
    element: <AllProjectsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
