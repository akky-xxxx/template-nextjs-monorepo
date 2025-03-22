// msw, fetch を有効化
const { TextDecoder, TextEncoder } = require("util")
const { TransformStream } = require("node:stream/web")
global.TextDecoder = TextDecoder
global.TextEncoder = TextEncoder
global.TransformStream = TransformStream

// fetch を有効化
const fetch = require("whatwg-fetch")
global.fetch = fetch

require("@testing-library/jest-dom")

const {handlersForRouteHandler} = require("../../../spec/mock/handlersForRouteHandler")
const {setupServer} = require("msw/node")
const server = setupServer(...handlersForRouteHandler)

beforeAll(() => {
  server.listen()
})
afterEach(async () => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})
