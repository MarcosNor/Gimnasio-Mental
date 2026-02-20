import { ErrorDictionary, type ErrorCode } from "./errorDictionary.ts";

class CustomError extends Error {
  httpStatusCode: number;
  timestamp: string;
  errorCode: ErrorCode;

  constructor(errorCode: ErrorCode) {
    const errorInfo = ErrorDictionary[errorCode];
    
    super(errorInfo.message);

    this.errorCode = errorCode;
    this.httpStatusCode = errorInfo.status;
    this.timestamp = new Date().toISOString();

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;