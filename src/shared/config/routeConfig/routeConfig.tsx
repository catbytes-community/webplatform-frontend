import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { MainPage } from "../../../pages/MainPage";
// import { AboutPage } from "../../../pages/AboutPage";
// import { MentorsPage } from "../../../pages/MentorsPage";
// import { AddProjectPage } from "../../../pages/AddProjectPage";
// import { StudyBuddyPage } from "../../../pages/StudyBuddyPage";
import { ApplicationsPage } from "../../../pages/ApplicationsPage";
import { LoginPage } from "../../../pages/LoginPage";
import { Pomodoro } from "../../../pages/Pomodoro";
// import {CreateResourcePage} from "../../../pages/CreateResourcePage";
// import {CommunityResources} from "../../../pages/CommunityResourcesPage";
// import {AllProjectsPage} from "../../../pages/AllProjectsPage";
// import {ProjectPage} from "../../../pages/ProjectPage";
import { CreateApplicationPage } from "../../../pages/CreateApplicationPage";
import { UserProfilePage } from "../../../pages/UserProfilePage";
import PrivacyPolicy from "../../../pages/PrivacyPolicy";
import { ProtectedRoute } from "../../../pages/ProtectedRoute";
import TandC from "../../../pages/TandC";
import { CreateApplicationMentorPage } from "../../../pages/CreateApplicationMentorPage";
import { MentorUserProfilePage } from "../../../pages/MentorUserProfilePage";
import { AuthDiscordCallbackPage } from "../../../pages/AuthDiscordCallbackPage";

export enum AppRoutes {
  MAIN = "main",
  // ABOUT = "about",
  // MENTORS = "mentors",
  // ALL_PROJECTS = "projects",
  // PROJECT = "project",
  // ADD_PROJECT = "add_project",
  // STUDY_BUDDY = "study_groups",
  NOT_FOUND = "not_found",
  POMODORO = "pomodoro",
  // COMMUNITY_RESOURCES = "community_resources",
  // CREATE_RESOURCE = "CREATE_RESOURCE",
  APPLICATIONS = "applications",
  LOGIN = "login",
  CREATE_APPLICATION = "create_application",
  USER_PROFILE = "user_profile/:id",
  PRIVACY_POLICY = "privacy_policy",
  TERMS_AND_CONDITIONS = "terms_and_conditions",
  CREATE_APPLICATION_MENTOR = "create_application_mentor",
  MENTOR_USER_PROFILE = "mentor_user_profile/:id",
  AUTH_DISCORD_CALLBACK = "auth/discord/callback",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  // [AppRoutes.ABOUT]: "/about",
  // [AppRoutes.MENTORS]: "/mentors",
  // [AppRoutes.ALL_PROJECTS]: "/projects",
  // [AppRoutes.PROJECT]: "/project/:id",
  // [AppRoutes.ADD_PROJECT]: "/add_project",
  // [AppRoutes.STUDY_BUDDY]: "/study_groups",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.POMODORO]: "/pomodoro",
  // [AppRoutes.COMMUNITY_RESOURCES]: "/community_resources",
  // [AppRoutes.CREATE_RESOURCE]: "/create_resource",
  [AppRoutes.APPLICATIONS]: "/applications",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.CREATE_APPLICATION]: "/create_application",
  [AppRoutes.USER_PROFILE]: "/user_profile/:id",
  [AppRoutes.PRIVACY_POLICY]: "/privacy_policy",
  [AppRoutes.TERMS_AND_CONDITIONS]: "/terms_and_conditions",
  [AppRoutes.CREATE_APPLICATION_MENTOR]: "/create_application_mentor",
  [AppRoutes.MENTOR_USER_PROFILE]: "/mentor_user_profile/:id",
  [AppRoutes.AUTH_DISCORD_CALLBACK]: "/auth/discord/callback",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  // [AppRoutes.ABOUT]: {
  //   path: RoutePath.about,
  //   element: <AboutPage />,
  // },
  // [AppRoutes.ALL_PROJECTS]: {
  //   path: RoutePath.projects,
  //   element: <AllProjectsPage />,
  // },
  // [AppRoutes.PROJECT]: {
  //   path: RoutePath.project,
  //   element: <ProjectPage />,
  // },
  // [AppRoutes.ADD_PROJECT]: {
  //   path: RoutePath.add_project,
  //   element: <AddProjectPage />,
  // },
  // [AppRoutes.STUDY_BUDDY]: {
  //   path: RoutePath.study_groups,
  //   element: <StudyBuddyPage />,
  // },
  // [AppRoutes.MENTORS]: {
  //   path: RoutePath.mentors,
  //   element: <MentorsPage />,
  // },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.POMODORO]: {
    path: RoutePath.pomodoro,
    element: <Pomodoro />,
  },
  // [AppRoutes.COMMUNITY_RESOURCES]: {
  //   path: RoutePath.community_resources,
  //   element: <CommunityResources />,
  // },
  // [AppRoutes.CREATE_RESOURCE]: {
  //   path: RoutePath.CREATE_RESOURCE,
  //   element: <CreateResourcePage />,
  // },
  [AppRoutes.APPLICATIONS]: {
    path: RoutePath.applications,
    element: <ProtectedRoute element={<ApplicationsPage />} />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.CREATE_APPLICATION]: {
    path: RoutePath.create_application,
    element: <CreateApplicationPage />,
  },
  [AppRoutes.USER_PROFILE]: {
    path: RoutePath[AppRoutes.USER_PROFILE],
    element: <UserProfilePage />,
  },
  [AppRoutes.PRIVACY_POLICY]: {
    path: RoutePath.privacy_policy,
    element: <PrivacyPolicy />,
  },
  [AppRoutes.TERMS_AND_CONDITIONS]: {
    path: RoutePath.terms_and_conditions,
    element: <TandC />,
  },
  [AppRoutes.CREATE_APPLICATION_MENTOR]: {
    path: RoutePath.create_application_mentor,
    element: <CreateApplicationMentorPage />,
  },
  [AppRoutes.MENTOR_USER_PROFILE]: {
    path: RoutePath[AppRoutes.MENTOR_USER_PROFILE],
    element: <MentorUserProfilePage />,
  },
  [AppRoutes.AUTH_DISCORD_CALLBACK]: {
    path: RoutePath[AppRoutes.AUTH_DISCORD_CALLBACK],
    element: <AuthDiscordCallbackPage />,
  },
};
