export const STATUS_CODE = {
  OK: 200,

  BAD_REQUEST: 400,
} as const satisfies Record<string, number>
