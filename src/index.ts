import app from "./app.ts"
import { config } from "./config/config.ts"
import crypto from "crypto"

const { PORT, NODE_ENV } = config

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`)
)
