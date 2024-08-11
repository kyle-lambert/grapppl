import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WORKOS_CLIENT_ID: string;
      WORKOS_API_ID: string;
    }
  }
}
