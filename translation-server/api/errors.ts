export class InvalidAPIKey extends Error {
  status = 403;
  constructor(message: string = "invalid API Key") {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message;
  }
}

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
