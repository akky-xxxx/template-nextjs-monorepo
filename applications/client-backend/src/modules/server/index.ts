import Fastify from "fastify"

import { handlers } from "@/handlers"

const fastify = Fastify({
  logger: {
    transport: {
      options: {
        colorize: true,
      },
      target: "pino-pretty",
    },
  },
})

handlers.forEach(([method, endpoint, handler]) => {
  fastify[method](endpoint, handler)
})

export const server = fastify
