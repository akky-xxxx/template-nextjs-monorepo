import { judgeValue } from "@/handlers/API_EVEN_ODD/GET/modules/judgeValue"
import { STATUS_CODE } from "@/shared/constants/STATUS_CODE"

import type { Handlers } from "@/handlers/types/Handlers"
import type { Endpoints } from "@/shared/types/Endpoints"
import type { GetRequestHandler } from "@/shared/types/GetRequestHandler"

const handler: GetRequestHandler<"get-api-be-even-odd"> = (
  request,
  reply,
) => {
  const numberFromRouteHandler = request.query?.numberFromRouteHandler

  if (numberFromRouteHandler === undefined) {
    reply.code(STATUS_CODE.BAD_REQUEST).send(new Error("Bad request"))
    return
  }

  reply.send({
    responseData: {
      judgementResult: judgeValue(numberFromRouteHandler),
    },
  })
}

export const GET = [
  "get",
  "/api/be-even-odd" satisfies Endpoints,
  handler,
] as const satisfies Handlers[number]
