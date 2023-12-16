import dotenv from "dotenv"

dotenv.config()

export const config = {
  NODE_ENV: String(process.env.NODE_ENV),
  PORT: Number(process.env.PORT),
  OTP_HASH: String(process.env.OTP_HASH),
  JWT_SECRET: String(process.env.JWT_SECRET),
  SMTP_HOST: String(process.env.SMTP_HOST),
  SMTP_PORT: Number(process.env.SMTP_PORT),
  SMTP_USER: String(process.env.SMTP_USER),
  SMTP_PASSWORD: String(process.env.SMTP_PASSWORD),
}
