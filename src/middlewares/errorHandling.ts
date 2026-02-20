import type { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError.ts';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  // default HTTP status code and error message
  let httpStatusCode = 500;
  let message = "Internal Server Error";
  let timestamp = new Date().toISOString();
  
  // if the error is a custom defined error
  if (err instanceof CustomError) {
    httpStatusCode = err.httpStatusCode;
    message = err.message;
    timestamp = err.timestamp;
  } else {
    // hide the detailed error message in production
    // for security reasons
    if (process.env.NODE_ENV !== "production") {
      if (typeof err === "string") {
        message = err;
      } else if (err instanceof Error) {
        message = err.message;
      }
    } else {
      message = "Ha ocurrido un error";
    }
  }

  let stackTrace = undefined;

  // return the stack trace only when
  // developing locally or in stage
  if (process.env.NODE_ENV !== "production") {
    stackTrace = err.stack;
  }

  // logg the error
  console.error(`[Error ${httpStatusCode}]: ${message}`);
  // other custom behaviors...
 
  // return the standard error response
  res.status(httpStatusCode).json({
    error: {
      type: err instanceof CustomError ? err.errorCode : "UNKNOWN_ERROR",
      message,
      timestamp,
      stackTrace,
    },
  });
}

export default errorHandler;