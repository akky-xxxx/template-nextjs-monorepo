/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const { searchParams: requestedSearchParameters } = request.nextUrl
  const numberQueryValue = requestedSearchParameters.get("numberFromFront")
  const requestSearchParameters = new URLSearchParams()
  if (numberQueryValue !== null && numberQueryValue !== "") requestSearchParameters.set("numberFromBff", numberQueryValue)

  const requestUrl = `http://localhost:3100/api/be-even-odd?${requestSearchParameters.toString()}`
  const result = await fetch(requestUrl)
    .then((response) => response.json())
    // TODO: api 周りの型を整備したら不要になる
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    .then((data) => data.result)
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error(error)
      return "error"
    })
  return Response.json(result)
}
