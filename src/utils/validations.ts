import { z } from "zod"

export const getOtpSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Enter a valid email" }),
})

export const verifyOtpSchema = z.object({
  email: z
    .string({
      required_error: "Email is missing",
    })
    .email({ message: "Enter a valid email" }),
  hash: z.string({
    required_error: "hash is missing",
  }),
  otp: z.string({
    required_error: "Otp is missing",
  }),
})
