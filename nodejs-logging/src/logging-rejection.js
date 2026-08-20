import winston from "winston";

async function logWithRejection() {
  return Promise.reject("Boom!");
}

const logger = winston.createLogger({
  level: "info",
  handleRejections: true,
  transports: [
    // handleExceptions: true,
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "./logs/rejection.log",
      // format: winston.format.simple(),
    }),
  ],
});

logWithRejection();
