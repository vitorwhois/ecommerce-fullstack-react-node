"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.UnauthorizedError = exports.AlreadyExistsError = exports.ValidationError = exports.NotFoundError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.CustomError = CustomError;
class NotFoundError extends CustomError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
class ValidationError extends CustomError {
    constructor(message = "Validation failed") {
        super(message, 400);
    }
}
exports.ValidationError = ValidationError;
class AlreadyExistsError extends CustomError {
    constructor(message = "Already Exists") {
        super(message, 400);
    }
}
exports.AlreadyExistsError = AlreadyExistsError;
class UnauthorizedError extends CustomError {
    constructor(message = "Unauthorized access") {
        super(message, 401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class InternalServerError extends CustomError {
    constructor(message = "Internal Server Error") {
        super(message, 500);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=errors.js.map