import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../layout"
import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy } from "react";

const MicroFrontend = lazy(() => {
	return loadRemote<{ default: any }>('remote_b/Module', {
		from: 'runtime',
	}) as Promise<{ default: any }>;
});

export const remoteBRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/remote-b/*',
	component: () => {
		return <div><MicroFrontend /></div>
	},
})