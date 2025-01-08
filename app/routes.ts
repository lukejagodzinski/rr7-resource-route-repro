import { index, layout, route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

export default [
  route("1st", "routes/1st/route.ts"),
  route("2nd", "routes/2nd/route.ts"),
  route("3rd", "routes/3rd/route.ts"),
] satisfies RouteConfig;
