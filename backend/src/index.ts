/** @format */

import { backendSetup } from "setup";
// import { AppDataSource } from "./setup/database.setup";
import { dbCreate, Logger } from "./utils";
import { CONNECTION_SUCCESS } from "./consts/messages/database.message";
import { MESSAGES } from "./consts";

const setupSever = async () => {
  try {
    // await AppDataSource.initialize();
    await dbCreate();
    Logger.info(MESSAGES.DATABASE.CONNECTION_SUCCESS);
  } catch (error) {
    Logger.info(MESSAGES.DATABASE.CONNECTION_FAILED);
    Logger.error(error);
  }
};

setupSever();
