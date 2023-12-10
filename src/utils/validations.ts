import { z } from "zod"

export const userSchema = z.object({
  name: z.string({
    required_error: "Name is requred",
  }),
  phone: z.string({
    required_error: "Phone no is requred",
  }),
})
