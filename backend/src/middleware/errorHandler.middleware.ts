/** @format */

import { Logger } from "@/utils";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const errorHandlerMiddleware = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Logger.error(JSON.stringify(err));

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: (err as Error).message,
  });
};
