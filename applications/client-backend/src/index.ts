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

const startServer = async () => {
  try {
    await fastify.listen({ port: 3100 })
  } catch (error) {
    fastify.log.error(error)
    // eslint-disable-next-line unicorn/no-process-exit, @typescript-eslint/no-magic-numbers
    process.exit(1)
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer()
