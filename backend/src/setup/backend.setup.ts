/** @format */
import cors from "cors";
import express, { Express } from "express";

export const backendSetup = () => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());
};
