import { server } from "@/modules/server"

describe("apiEvenOddGet", () => {
  beforeAll(async () => {
    await server.ready()
  })

  afterAll(async () => {
    await server.close()
  })

  it('numberFromRouteHandler が 0 でリクエストされたら { judgementResult: "even" } を返す', async () => {
    const response = await server.inject({
      method: "get",
      url: "/api/be-even-odd",
      query: {
        numberFromRouteHandler: "0",
      },
    })
    expect(response.statusCode).toBe(200)
    expect(response.json()).toStrictEqual({
      responseData: {
        judgementResult: "even",
      },
    })
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

  it('numberFromRouteHandler が数字以外でリクエストされたら { judgementResult: "NaN" } を返す', async () => {
    const response = await server.inject({
      method: "get",
      url: "/api/be-even-odd",
      query: {
        numberFromRouteHandler: "not a number",
      },
    })
    expect(response.statusCode).toBe(200)
    expect(response.json()).toStrictEqual({
      responseData: {
        judgementResult: "NaN",
      },
    })
  })

  it('numberFromRouteHandler が未指定でリクエストされたら status code 400 を返す', async () => {
    const response = await server.inject({
      method: "get",
      url: "/api/be-even-odd",
    })
    expect(response.statusCode).toBe(400)
    expect(response.statusMessage).toBe("Bad Request")
  })
})
