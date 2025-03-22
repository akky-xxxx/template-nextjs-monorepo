import type { ResponseSelector } from "@/shared/types/ResponseSelector"

const numberRegex = /^\d+$/
const HALF = 2

type Return = ResponseSelector<"get-api-be-even-odd">["responseData"]["judgementResult"]
type JudgeValue = (input: string) => Return

export const judgeValue: JudgeValue = (input: string) => {
  if (!numberRegex.test(input)) return "NaN"
  return Number(input) % HALF ? "odd" : "even"
}
