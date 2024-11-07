import { indexRoute } from ".";
import { aboutRoute } from "./about";
import { rootRoute } from "../layout";
import { createRouter } from "@tanstack/react-router";
import { notFoundRoute } from "./not-found";
import { productRoute } from "./product";
import { productsIndexRoute, productsRoute } from "./products";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, productsRoute.addChildren([productsIndexRoute, productRoute]), notFoundRoute]);

export const router = createRouter({ routeTree })


