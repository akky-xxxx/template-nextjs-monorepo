import type { Handlers } from "@/handlers/types/Handlers"
import type { operations } from "@/libs/apiSchema/client-backend"
import type { CustomRouteHandlerMethod } from "@/shared/types/CustomRouteHandlerMethod"
import type { Endpoints } from "@/shared/types/Endpoints"
import type { QuerySelector } from "@/shared/types/QuerySelector"
import type { RequestData } from "@/shared/types/RequestData"
import type { ResponseSelector } from "@/shared/types/ResponseSelector"

type Endpoint = Extract<keyof operations, "get-api-be-even-odd">

type Query = QuerySelector<Endpoint>
type Response = ResponseSelector<Endpoint>

const handler: CustomRouteHandlerMethod<RequestData<never, never, never, Query>, Response> = (
  request,
  reply,
) => {
  // eslint-disable-next-line no-console
  console.log(request.query?.numberFromRouteHandler)
  reply.send({
    responseData: {
      judgementResult: "odd",
    },
  })
}

export const GET = [
  "get",
  "/api/be-even-odd" satisfies Endpoints,
  handler,
] as const satisfies Handlers[number]
