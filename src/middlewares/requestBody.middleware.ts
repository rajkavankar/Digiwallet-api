import { Request, Response, NextFunction } from "express"
import { z, AnyZodObject } from "zod"

export const requestBodyValidation =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      return next()
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
      })
    }
  }
