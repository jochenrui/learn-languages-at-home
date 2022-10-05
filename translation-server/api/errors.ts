/**
 * Error class thrown when the API Key is invalid
 * status: 403
 * @param message (string): message to be displayed
 */
export class InvalidAPIKey extends Error {
  status = 403;
  constructor(message: string = "invalid API Key") {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message;
  }
}

/**
 * Error class thrown when too many requsets are sent in a time limit
 * status: 429
 * @param message (string): message to be displayed
 */
export class TooManyRequests extends Error {
  status = 429;
  constructor(
    message: string = "Too many requests, please wait a little bit."
  ) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || "Something went wrong. Please try again.";
  }
}

/**
 * Error class thrown when the monthly API call limits have been exceeded
 * status: 456
 * @param message (string): message to be displayed
 */
export class APILimitExceeded extends Error {
  status = 429;
  constructor(
    message: string = "Too many requests, please wait a little bit."
  ) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || "Something went wrong. Please try again.";
  }
}
