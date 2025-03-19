import { beEvenOddGet } from "./handlers/be-even-odd/get"

// 可読性を高めるためのプロパティ名
/* eslint-disable @typescript-eslint/naming-convention */
const BASE = {
  "be-event-odd:get": beEvenOddGet,
}
/* eslint-enable @typescript-eslint/naming-convention */

export const handlersForBackend = Object.values(BASE)
