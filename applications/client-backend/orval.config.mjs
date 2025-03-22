export default {
  "client-backend": {
    input: "../../documents/openapi/dist/client-backend.yaml",
    output: {
      client: "zod",
      mode: "single",
      schemas: "./src/libs/model/client-backend",
      target: "./src/libs/zodSchema/client-backend.ts",
    },
  },
}
