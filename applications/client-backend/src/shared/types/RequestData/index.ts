export type RequestData<H, B, P, Q> = {
  // fastify の定義に則ってる
  /* eslint-disable @typescript-eslint/naming-convention */
  Body?: Partial<B>
  Headers?: Partial<H>
  Params?: Partial<P>
  Querystring?: Partial<Q>
  /* eslint-enable @typescript-eslint/naming-convention */
}
