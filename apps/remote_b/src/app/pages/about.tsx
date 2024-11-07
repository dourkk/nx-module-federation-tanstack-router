import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../layout"

export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
	component: () => {
		return <div className="p-2">Hello from About!</div>
	},
})