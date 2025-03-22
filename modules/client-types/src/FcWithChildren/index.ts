import type { FC, PropsWithChildren } from "react"

export type FcWithChildren<P = Record<string, unknown>> = FC<PropsWithChildren<P>>
