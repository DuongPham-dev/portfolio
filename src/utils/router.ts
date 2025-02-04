// Constants
import { ROUTES } from "@/constants";

export const getInfoRouteByName = (name: string) =>
  ROUTES.find(
    ({ name: routeName }) =>
      `${name}`.toLowerCase().trim() === `${routeName}`.toLowerCase().trim()
  );
