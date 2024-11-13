import { remoteARoute } from './remote-a';
import { remoteBRoute } from './remote-b';
import { rootRoute } from '../layout';
import { createRouter } from '@tanstack/react-router';

const routeTree = rootRoute.addChildren([remoteARoute, remoteBRoute]);

export const router = createRouter({ routeTree });
