/** @format */

import { backendSetup, databaseSetup } from "setup";
import { Logger } from "utils";
import { MESSAGES } from "consts";
import { AppDataSource } from "@/setup/data-source";

const setupSever = async () => {
  try {
    await databaseSetup();
    await AppDataSource.initialize();
    Logger.info(MESSAGES.DATABASE.CONNECTION_SUCCESS);
  } catch (error) {
    Logger.info(MESSAGES.DATABASE.CONNECTION_FAILED);
    Logger.error(error);
  }

  try {
    await backendSetup();
  } catch (error) {
    Logger.info(MESSAGES.SEVER.SEVER_FAILED);
    Logger.error(error);
  }
};

setupSever();
