import express, { Application } from "express"
import cookieParser from "cookie-parser"
import swaggerUi from "swagger-ui-express"
import router from "./routes/index.ts"
import fs from "fs"
import YAML from "yaml"

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const file = fs.readFileSync("./src/documentation/swagger.yaml", "utf8")
const swaggerDocument = YAML.parse(file)

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
}
app.use("/api/v1", router)

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))

export default app
