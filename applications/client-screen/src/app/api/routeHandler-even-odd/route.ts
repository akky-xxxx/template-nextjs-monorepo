import { getApiBeEvenOdd } from "@/libs/apiClient/client-backend"

import type { GetApiRouteHandlerEvenOddParams } from "@/libs/model/client-routeHandler"
import type { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const { searchParams: requestedSearchParameters } = request.nextUrl
  const numberQueryValue = requestedSearchParameters.get("numberFromFront" satisfies keyof GetApiRouteHandlerEvenOddParams)

  if (numberQueryValue === null) return Response.json("error")

  try {
    const { data } = await getApiBeEvenOdd({ numberFromRouteHandler: numberQueryValue })
    return Response.json(data)
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error(error)
    return Response.json("error")
  }
}
