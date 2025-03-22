import { server } from "@/modules/server"

describe("apiEvenOddGet", () => {
  beforeAll(async () => {
    await server.ready()
  })

  afterAll(async () => {
    await server.close()
  })

  it('numberFromRouteHandler が 1 でリクエストされたら { judgementResult: "odd" } を返す', async () => {
    const response = await server.inject({
      method: "get",
      url: "/api/be-even-odd",
      query: {
        numberFromRouteHandler: "1",
      },
    })
    expect(response.statusCode).toBe(200)
    expect(response.json()).toStrictEqual({
      responseData: {
        judgementResult: "odd",
      },
    })
  })
})
