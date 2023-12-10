import { Router } from "express"
import { setOtp } from "../controllers/auth.controller.ts"
import { userSchema } from "../utils/validations.ts"
import { requestBodyValidation } from "../middlewares/requestBody.middleware.ts"
const router: Router = Router()

router.post("/", requestBodyValidation(userSchema), setOtp)

export default router
