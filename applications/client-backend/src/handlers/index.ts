import { API_EVEN_ODD } from "@/handlers/API_EVEN_ODD"

import type { Handlers } from "@/handlers/types/Handlers"

export const handlers = [
  ...API_EVEN_ODD,
] as const satisfies Handlers
