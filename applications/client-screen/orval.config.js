module.exports = {
  "client-backend": {
    input: "../../documents/openapi/dist/client-backend.yaml",
    output: {
      baseUrl: "http://localhost:3100/",
      client: "fetch",
      schemas: "./src/libs/model/client-backend",
      target: "./src/libs/apiClient/client-backend.ts",
    },
  },
  "client-routeHandler": {
    input: "../../documents/openapi/dist/client-routeHandler.yaml",
    output: {
      client: "fetch",
      schemas: "./src/libs/model/client-routeHandler",
      target: "./src/libs/apiClient/client-routeHandler.ts",
    },
  },
}
