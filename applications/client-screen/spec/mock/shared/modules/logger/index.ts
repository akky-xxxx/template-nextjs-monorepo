type Input1 = {
  method: string
  mockTarget: string
}
type Input2 = {
  action?: string
  data?: unknown
}

type LogObject = Input1 & Input2

type Logger = (input1: Input1) => (input2: Input2) => void

export const logger: Logger = (input1) => (input2) => {
  const { method, mockTarget } = input1
  const { action, data } = input2

  const logObject: LogObject = {
    method,
    mockTarget,
  }
  if (action !== undefined) logObject.action = action
  if (data !== undefined) logObject.data = data

  console.log(logObject)
}
