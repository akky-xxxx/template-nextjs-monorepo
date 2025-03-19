"use client"

import { Suspense, use } from "react"

import { handlersForRouteHandler } from "../../../spec/mock/handlersForRouteHandler"

import type { ReactNode } from "react"

// eslint-disable-next-line unicorn/prefer-global-this
const mockingEnabledPromise = process.env["NEXT_PUBLIC_ENABLED_API_MOCK_FOR_ROUTE_HANDLER"] !== "true" || typeof window === "undefined"
  ? Promise.resolve()
  // eslint-disable-next-line unicorn/prefer-top-level-await
  : import("../../../spec/mock/worker").then(async ({ worker }) => {
      await worker.start({
        onUnhandledRequest(request, print) {
          if (request.url.includes("_next")) return

          print.warning()
        },
      })
      worker.use(...handlersForRouteHandler)

      worker.listHandlers()
    })

export const MswProvider = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => (
  // refer: https://github.com/mswjs/examples/pull/101
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  <Suspense fallback={null}>
    <MSWProviderWrapper>{children}</MSWProviderWrapper>
  </Suspense>
)

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  use(mockingEnabledPromise)
  return children
}
