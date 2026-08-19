import winston from "winston";

test("create new logger with console & file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "./logs/test.log",
      }),
      new winston.transports.File({
        filename: "./logs/application.log",
      })
    ]
  });

logger.info("This is INFO message!");
logger.info("This is INFO message!");
logger.info("This is INFO message!");
logger.info("This is INFO message!");
logger.info("This is INFO message!");
});
