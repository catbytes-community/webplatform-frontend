import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { MainPage } from "../../../pages/MainPage";
import { AboutPage } from "../../../pages/AboutPage";
import { MentorsPage } from "../../../pages/MentorsPage";
import { AllProjectsPage } from "../../../pages/AllProjectsPage";
import { StudyBuddyPage } from "../../../pages/StudyBuddyPage";
import { Pomodoro } from "../../../pages/Pomodoro";
import { ApplicationsPage } from "../../../pages/ApplicationsPage";
import { LoginPage } from "../../../pages/LoginPage";
import { CommunityResources } from "../../../pages/CommunityResourcesPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  MENTORS = "mentors",
  ALL_PROJECTS = "projects",
  STUDY_BUDDY = "study_groups",
  NOT_FOUND = "not_found",
  POMODORO = "pomodoro",
  APPLICATIONS = "applications",
  LOGIN = "login",
  COMMUNITY_RESOURCES = "community_resources"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.MENTORS]: "/mentors",
  [AppRoutes.ALL_PROJECTS]: "/projects",
  [AppRoutes.STUDY_BUDDY]: "/study_groups",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.POMODORO]: "/pomodoro",
  [AppRoutes.APPLICATIONS]: "/applications",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.COMMUNITY_RESOURCES]: "/community_resources"
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
  [AppRoutes.STUDY_BUDDY]: {
    path: RoutePath.study_groups,
    element: <StudyBuddyPage />,
  },
  [AppRoutes.MENTORS]: {
    path: RoutePath.mentors,
    element: <MentorsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.POMODORO]: {
    path: RoutePath.pomodoro,
    element: <Pomodoro />,
  },
  [AppRoutes.APPLICATIONS]: {
    path: RoutePath.applications,
    element: <ApplicationsPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.COMMUNITY_RESOURCES]: {
    path: RoutePath.community_resources,
    element: <CommunityResources />
  }
};
