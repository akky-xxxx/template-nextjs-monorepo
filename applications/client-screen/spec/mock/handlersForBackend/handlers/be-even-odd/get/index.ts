import { http, HttpResponse } from "msw"

import { logger } from "../../../../shared/modules/logger"
import { HOST_PREFIX } from "../../../constants/HOST_PREFIX"

import type { getGetApiBeEvenOddUrl } from "@/libs/apiClient/client-backend"
import type { GetApiBeEvenOdd200, GetApiBeEvenOddParams } from "@/libs/model/client-backend"

const MOCK_TARGET = `${HOST_PREFIX}/be-even-odd` satisfies ReturnType<typeof getGetApiBeEvenOddUrl>
const METHOD = "get"

const outputLog = logger({
  method: METHOD,
  mockTarget: MOCK_TARGET,
})
export const beEvenOddGet = http[METHOD](MOCK_TARGET, ({ request }) => {
  outputLog({
    action: "request",
  })
  try {
    const numberQueryValue = new URL(request.url).searchParams.get("numberFromRouteHandler" satisfies keyof GetApiBeEvenOddParams)
    if (numberQueryValue === null || !(/^\d+$/.test(numberQueryValue))) {
      outputLog({
        action: "response",
        data: { numberQueryValue },
      })
      return HttpResponse.json({
        isSuccess: true,
        result: "NaN" satisfies GetApiBeEvenOdd200,
      })
    }
    const result: GetApiBeEvenOdd200 = Number(numberQueryValue) % 2 === 0 ? "even" : "odd"
    outputLog({
      action: "request",
      data: result,
    })
    return HttpResponse.json({
      isSuccess: true,
      result,
    })
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
