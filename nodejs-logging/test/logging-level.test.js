import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "This is ERROR message!" });
  logger.log({ level: "warn", message: "This is WARN message!" });
  logger.log({ level: "info", message: "This is INFO message!" });
  logger.log({ level: "http", message: "This is HTTP message!" });
  logger.log({ level: "verbose", message: "This is VERBOSE message!" });
  logger.log({ level: "debug", message: "This is DEBUG message!" });
  logger.log({ level: "silly", message: "This is SILLY message!" });
});

test("create new logger with console transport (shortcut function)", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.error("This is ERROR message!");
  logger.warn("This is WARN message!");
  logger.info("This is INFO message!");
  logger.http("This is HTTP message!");
  logger.verbose("This is VERBOSE message!");
  logger.debug("This is DEBUG message!");
  logger.silly("This is SILLY message!");
});
