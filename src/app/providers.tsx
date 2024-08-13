"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

type ClientProvidersProps = PropsWithChildren;

export function ClientProviders({ children }: ClientProvidersProps) {
  let router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
}
