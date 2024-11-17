/** @format */

import { NextFunction } from "express";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { AnyZodObject } from "zod";

export * from "./recipe.validation";

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({
        message: error.issues[0].message,
      });
    }
  };
