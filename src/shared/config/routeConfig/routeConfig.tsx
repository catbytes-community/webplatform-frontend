import { RouteProps } from "react-router-dom"
import { NotFoundPage } from "../../../pages/NotFoundPage"
import { MainPage } from "../../../pages/MainPage"
import { AboutPage } from "../../../pages/AboutPage"
import { MentorsPage } from "../../../pages/MentorsPage"

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	MENTORS = "mentors",
	NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.MENTORS]: "/mentors",
	[AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.MENTORS]: {
		path: RoutePath.mentors,
		element:<MentorsPage/>
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	}
}
