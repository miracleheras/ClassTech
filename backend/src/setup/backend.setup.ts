/** @format */
import { MESSAGES } from "@/consts";
import { errorHandlerMiddleware } from "@/middleware";
import router from "@/routers";
import { Logger } from "@/utils";
import cors from "cors";
import express, { Express, Request, Response } from "express";

export const backendSetup = () => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.use("/health", (_req: Request, res: Response) => {
    res.send("OK");
  });

  app.use("/api", router);

  app.use(errorHandlerMiddleware);

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    Logger.info(MESSAGES.SEVER.SEVER_SUCCESS);
  });
};
