import { WorkOS } from "@workos-inc/node";

export const workos = new WorkOS(
  process.env.NODE_ENV === "development" ? process.env.WORKOS_API_KEY : "",
);
