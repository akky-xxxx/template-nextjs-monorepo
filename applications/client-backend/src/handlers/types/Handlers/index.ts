type Method = "delete" | "get" | "post" | "put"
// 詳細な定義は各ハンドラ事に行うので問題ない
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Handler = [Method, Endpoint: string, handler: (...argument: any[]) => any]

export type Handlers = Handler[]
