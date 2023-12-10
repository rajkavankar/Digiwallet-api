import { db } from "../config/db.ts"
import { CustomError } from "../utils/CustomError.ts"
import { asyncHandler } from "../utils/asyncHandler.ts"

export const setOtp = asyncHandler(async (req, res) => {
  let name = req.body.name
  let phone = req.body.phone
  let isError = false
  if (isError) {
    throw new CustomError("Custom error", 400)
  }
  res.status(200).json({
    success: true,
    message: "Otp sent successfully",
  })
})
