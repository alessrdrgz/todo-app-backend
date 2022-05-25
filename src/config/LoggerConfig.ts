import { Logger } from "@tsed/logger";

export const logger = new Logger("TODO");

logger.appenders.set("std-log", {
  type: "stdout",
  layout: {
    type: "pattern",
    pattern: "%[[%d{dd/MM/yyyy hh:mm:ss}] [%p] [%x{logName}] -%] %m",
    tokens: {
      logName: () => logger.name,
    },
  },
  level: ["debug", "info", "trace", "error"],
});
