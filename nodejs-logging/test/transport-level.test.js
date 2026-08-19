import winston from "winston";

test("transport level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "./logs/application-global.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "./logs/application-error.log",
      })
    ]
  });

logger.info("This is INFO message!");
logger.info("This is INFO message!");
logger.info("This is INFO message!");
logger.error("This is ERROR message!");
logger.error("This is ERROR message!");
logger.error("This is ERROR message!");
logger.warn("This is WARN message!");
logger.warn("This is WARN message!");
logger.warn("This is WARN message!");
logger.http("This is HTTP message!");
logger.http("This is HTTP message!");
logger.http("This is HTTP message!");
});
