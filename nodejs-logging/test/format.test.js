import winston, { level } from "winston";

test("logger format messages", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console({})],
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
  });

  logger.info("This is INFO message!");
});

test("logger printf format messages", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console({})],
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
  });

  logger.info("This is INFO message!");
});
