import nodemailer from "nodemailer"
import { config } from "../config/config.ts"
import { ServerError } from "./CustomError.ts"

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASSWORD,
  },
})

export type mailOptionsType = {
  from: string
  to: string
  subject: string
  body: string
}

export const mailHelper = async (data: mailOptionsType) => {
  try {
    const info = await transporter.sendMail({
      from: data.from, // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      html: data.body, // html body
    })
  } catch (error) {
    throw new ServerError()
  }
}
