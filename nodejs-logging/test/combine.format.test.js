import winston, { level } from "winston";

test("logger commbine format messages", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console({})],
    format: winston.format.combine(winston.format.timestamp(), winston.format.ms(), winston.format.colorize(), winston.format.json()),
  });

  logger.info("This is INFO message!");
  logger.warn("This is WARN message!");
  logger.error("This is ERROR message!");
});
