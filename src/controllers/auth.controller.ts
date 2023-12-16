import { db } from "../config/db.ts"
import { CustomError } from "../utils/CustomError.ts"
import { asyncHandler } from "../utils/asyncHandler.ts"
import otpService from "../services/OtpService.ts"
import { mailHelper, mailOptionsType } from "../utils/mail-helper.ts"

export const setOtp = asyncHandler(async (req, res) => {
  const { email } = req.body
  const expire = Date.now() + otpService.ttl
  const otp = await otpService.getOtp()

  const hashedData = otpService.hashData(`${email}.${otp}.${expire}`)
  const data: mailOptionsType = {
    to: email,
    from: "support@digiwallet.com",
    subject: "Login otp for logging in",
    body: `OTP for logging is <b>${otp}</b>`,
  }

  await mailHelper(data)

  res.status(200).json({
    success: true,
    message: "Otp sent successfully",
    otp,
    hash: `${hashedData}.${expire}`,
  })
})

export const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp, hash } = req.body

  const [hashOtp, expiry] = hash.split(".")

  if (Date.now() > expiry) {
    throw new CustomError("Otp has expired", 400)
  }

  const hashedData = `${email}.${otp}.${expiry}`

  const isValid = otpService.isValidOtp(hashOtp, hashedData)

  if (!isValid) {
    throw new CustomError("Invalid otp", 401)
  }

  const user = await db.user.findUnique({ where: { email } })

  if (!user) {
    const newUser = await db.credentails.create({
      data: {
        email,
      },
    })
  }

  res.sendStatus(200)
})
