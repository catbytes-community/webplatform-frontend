
import { RouteProps } from "react-router-dom"
import { NotFoundPage } from "../../../pages/NotFoundPage"
import { MainPage } from "../../../pages/MainPage"
import { AboutPage } from "../../../pages/AboutPage"
import { AllProjectsPage } from "../../../pages/AllProjectsPage";
import { StudyBuddyPage } from "../../../pages/StudyBuddyPage";
import {Pomodoro} from "../../../pages/Pomodoro";

export enum AppRoutes {
	MAIN = "main",
  ABOUT = "about",
  ALL_PROJECTS = "projects",
  STUDY_BUDDY = "study_groups",
  NOT_FOUND = "not_found",
	POMODORO = "pomodoro"
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.ALL_PROJECTS]: "/projects",
  [AppRoutes.STUDY_BUDDY]: "/study_groups",
  [AppRoutes.NOT_FOUND]: "*",
	[AppRoutes.POMODORO]: "/pomodoro"
}

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
	[AppRoutes.POMODORO]: {
		path: RoutePath.pomodoro,
		element: <Pomodoro />
	}

};
