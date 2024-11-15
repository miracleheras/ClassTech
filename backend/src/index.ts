/** @format */

import { backendSetup, databaseSetup } from "setup";
import { Logger } from "./utils";
import { CONNECTION_SUCCESS } from "./consts/messages/database.message";
import { MESSAGES } from "./consts";

const setupSever = async () => {
  try {
    await databaseSetup();
    Logger.info(MESSAGES.DATABASE.CONNECTION_SUCCESS);
  } catch (error) {
    Logger.info(MESSAGES.DATABASE.CONNECTION_FAILED);
    Logger.error(error);
  }

  try {
    await backendSetup();
  } catch (error) {
    Logger.error(error);
  }
};

setupSever();
