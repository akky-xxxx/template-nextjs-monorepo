import { GET } from "./GET"

import type { Handlers } from "@/handlers/types/Handlers"

export const API_EVEN_ODD = [
  GET,
] as const satisfies Handlers
