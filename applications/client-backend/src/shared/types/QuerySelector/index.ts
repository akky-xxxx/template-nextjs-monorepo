import type { operations } from "@/libs/apiSchema/client-backend"

export type QuerySelector<P extends keyof operations> = operations[P]["parameters"]["query"]
