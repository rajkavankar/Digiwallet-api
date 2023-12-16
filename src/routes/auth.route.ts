import { Router } from "express"
import { setOtp, verifyOtp } from "../controllers/auth.controller.ts"
import { getOtpSchema, verifyOtpSchema } from "../utils/validations.ts"
import { requestBodyValidation } from "../middlewares/requestBody.middleware.ts"
const router: Router = Router()

router.post("/get-otp", requestBodyValidation(getOtpSchema), setOtp)
router.post("/verify-otp", requestBodyValidation(verifyOtpSchema), verifyOtp)

export default router
