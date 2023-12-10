import { Request, Response, NextFunction } from "express"

type asyncFn = (
  req: Request,
  res: Response,
  NextFunction?: NextFunction
) => void

export const asyncHandler =
  (fn: asyncFn) => async (req: Request, res: Response, next?: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      })
    }
  }
