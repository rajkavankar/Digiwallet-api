import { Router } from "express"
import userRoutes from "./auth.route.ts"
const router: Router = Router()

router.use("/auth", userRoutes)

export default router
