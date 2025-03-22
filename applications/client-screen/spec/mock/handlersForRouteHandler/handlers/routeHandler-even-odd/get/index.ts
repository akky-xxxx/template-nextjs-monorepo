import { http, HttpResponse } from "msw"

import { logger } from "../../../../shared/modules/logger"
import { PREFIX } from "../../../constants/PREFIX"

import type { getGetApiRouteHandlerEvenOddUrl } from "@/libs/apiClient/client-routeHandler"
import type { GetApiRouteHandlerEvenOdd200, GetApiRouteHandlerEvenOddParams } from "@/libs/model/client-routeHandler"

type Endpoint = ReturnType<typeof getGetApiRouteHandlerEvenOddUrl>
const MOCK_TARGET = `${PREFIX}/routeHandler-even-odd` satisfies Endpoint
const METHOD = "get"

const outputLog = logger({
  method: METHOD,
  mockTarget: MOCK_TARGET,
})

export const routeHandlerEvenOddGet = http[METHOD](MOCK_TARGET, ({ request }) => {
  outputLog({
    action: "request",
  })
  try {
    const numberQueryValue = new URL(request.url).searchParams.get(
      "numberFromFront" satisfies keyof GetApiRouteHandlerEvenOddParams,
    )

    if (numberQueryValue === null || !(/^\d+$/.test(numberQueryValue))) {
      outputLog({
        action: "bad request",
        data: { numberQueryValue },
      })
      return HttpResponse.json<GetApiRouteHandlerEvenOdd200>("NaN")
    }

    const result = Number(numberQueryValue) % 2 === 0 ? "even" : "odd"
    outputLog({
      action: "response",
      data: result,
    })
    return HttpResponse.json<GetApiRouteHandlerEvenOdd200>(result)
  } catch (error: unknown) {
    outputLog({
      action: "internal server error",
      data: { error },
    })
    return new HttpResponse(null, {
      status: 500,
    })
  }
})
