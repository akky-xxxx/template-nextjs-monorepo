import type { Handlers } from "@/handlers/types/Handlers"
import type { Endpoints } from "@/shared/types/Endpoints"
import type { GetRequestHandler } from "@/shared/types/GetRequestHandler"

const handler: GetRequestHandler<"get-api-be-even-odd"> = (
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
