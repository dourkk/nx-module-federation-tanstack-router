import { NotFoundRoute } from "@tanstack/react-router";
import { rootRoute } from "../layout";

export const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: () => <div>404 Not Found</div>,
})
