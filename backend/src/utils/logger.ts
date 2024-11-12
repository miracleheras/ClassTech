/** @format */

class CustomLogger {
  log(...args: any) {
    console.log(...args);
  }

  info(...args: any) {
    console.info(...args);
  }

  error(...args: any) {
    console.error(...args);
  }
}

export const Logger = new CustomLogger();
