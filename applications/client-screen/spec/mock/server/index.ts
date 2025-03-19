import { setupServer } from "msw/node"

import { handlersForBackend } from "../handlersForBackend"

export const server = setupServer(...handlersForBackend)
