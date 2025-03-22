import type { FastifyReply, FastifyRequest, RouteGenericInterface } from "fastify"
import type { FastifySchema } from "fastify/types/schema"
import type {
  FastifyReplyType,
  FastifyTypeProvider,
  FastifyTypeProviderDefault,
  ResolveFastifyReplyReturnType,
  ResolveFastifyReplyType,
} from "fastify/types/type-provider"
import type {
  ContextConfigDefault,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from "fastify/types/utils"

/**
 * fastify.RouteHandlerMethod を request, response 以外の情報を初期値で埋めたもの
 */
export type CustomRouteHandlerMethod<
  RequestData extends RouteGenericInterface = RouteGenericInterface,
  Reply extends FastifyReplyType = ResolveFastifyReplyType<
    FastifyTypeProvider,
    FastifySchema,
    RequestData
  >,
> = (
  request: FastifyRequest<
    RequestData,
    RawServerDefault,
    RawRequestDefaultExpression
  >,
  reply: FastifyReply<
    RequestData,
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    ContextConfigDefault,
    FastifySchema,
    FastifyTypeProviderDefault,
    Reply
  >
) => ResolveFastifyReplyReturnType<FastifyTypeProvider, FastifySchema, RequestData>
