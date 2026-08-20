import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new or custom transport", () => {
  class MyTransport extends TransportStream {
    constructor(parameters) {
      super(parameters);
    }

    log(log, next) {
      console.log(`${new Date()} : ${log.level.toUpperCase()} : ${log.message}`);
      next();
    }
  }

  const logger = winston.createLogger({
    level: "silly",
    transports: [new MyTransport({})],
  });

  logger.error("This is ERROR message!");
  logger.warn("This is WARN message!");
  logger.info("This is INFO message!");
  logger.http("This is HTTP message!");
  logger.verbose("This is VERBOSE message!");
  logger.debug("This is DEBUG message!");
  logger.silly("This is SILLY message!");
});
