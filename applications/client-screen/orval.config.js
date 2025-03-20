module.exports = {
  "client-routeHandler": {
    input: "../../documents/openapi/dist/client-routeHandler.yaml",
    output: {
      client: "fetch",
      schemas: "./src/libs/model/client-routeHandler",
      target: "./src/libs/apiClient/client-routeHandler.ts",
    },
  },
}
