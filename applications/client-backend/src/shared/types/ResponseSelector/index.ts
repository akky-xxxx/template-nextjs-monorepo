import type { operations } from "@/libs/apiSchema/client-backend"
import type { STATUS_CODE } from "@/shared/constants/STATUS_CODE"

type OkStatus = typeof STATUS_CODE.OK

export type ResponseSelector<P extends keyof operations> = operations[P]["responses"][OkStatus]["content"]["application/json"]
