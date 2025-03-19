import { routeHandlerEvenOddGet } from "./handlers/routeHandler-even-odd/get"

// 可読性を高めるためのプロパティ名
/* eslint-disable @typescript-eslint/naming-convention */
const base = {
  "routeHandler-event-odd:get": routeHandlerEvenOddGet,
}
/* eslint-enable @typescript-eslint/naming-convention */

export const handlersForRouteHandler = Object.values(base)
