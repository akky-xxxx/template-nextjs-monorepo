import { server } from "@/modules/server"

const startServer = async () => {
  try {
    await server.listen({ port: 3100 })
  } catch (error) {
    server.log.error(error)
    // eslint-disable-next-line unicorn/no-process-exit, @typescript-eslint/no-magic-numbers
    process.exit(1)
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer()
