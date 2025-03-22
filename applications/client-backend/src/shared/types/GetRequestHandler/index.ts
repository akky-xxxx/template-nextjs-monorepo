import type { operations } from "@/libs/apiSchema/client-backend"
import type { CustomRouteHandlerMethod } from "@/shared/types/CustomRouteHandlerMethod"
import type { QuerySelector } from "@/shared/types/QuerySelector"
import type { RequestData } from "@/shared/types/RequestData"
import type { ResponseSelector } from "@/shared/types/ResponseSelector"

export type GetRequestHandler<E extends keyof operations> = CustomRouteHandlerMethod<
  RequestData<never, never, never, QuerySelector<E>>,
  ResponseSelector<E>
>
