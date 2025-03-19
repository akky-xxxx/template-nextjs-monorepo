import { server } from "../../spec/mock/server"

export { Home as default } from "@/pageComponents/Home"

if (process.env["ENABLED_API_MOCK_FOR_BACKEND"] === "true") server.listen()
