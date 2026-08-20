import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    // handleExceptions: true,
    new winston.transports.File({
      handleExceptions: true,
      filename: "./logs/exception.log",
      // format: winston.format.simple(),
    }),
  ],
});

hello();
logger.info(kocak.ngakak);
