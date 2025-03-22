import type { Handlers } from "@/handlers/types/Handlers"
import type { operations } from "@/libs/apiSchema/client-backend"
import type { CustomRouteHandlerMethod } from "@/shared/types/CustomRouteHandlerMethod"
import type { Endpoints } from "@/shared/types/Endpoints"

type ThisQuery = operations["get-api-be-even-odd"]["parameters"]["query"]
type Response = operations["get-api-be-even-odd"]["responses"]["200"]["content"]["application/json"]

type RequestData<H, B, P, Q> = {
  // fastify の定義に則ってる
  /* eslint-disable @typescript-eslint/naming-convention */
  Body?: Partial<B>
  Headers?: Partial<H>
  Params?: Partial<P>
  Querystring?: Partial<Q>
  /* eslint-enable @typescript-eslint/naming-convention */
}

const handler: CustomRouteHandlerMethod<RequestData<never, never, never, ThisQuery>, Response> = (
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
