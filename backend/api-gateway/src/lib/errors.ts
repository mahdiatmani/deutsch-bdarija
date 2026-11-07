export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class RateLimitError extends AppError {
  constructor(retryAfter: number) {
    super(429, 'Rate limit exceeded', 'RATE_LIMIT_EXCEEDED', { retryAfter });
  }
}

export class ValidationError extends AppError {
  constructor(details: any) {
    super(400, 'Validation error', 'VALIDATION_ERROR', details);
  }
}

export class AIServiceError extends AppError {
  constructor(message: string) {
    super(503, message, 'AI_SERVICE_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(404, `${resource} not found`, 'NOT_FOUND');
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(401, message, 'UNAUTHORIZED');
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(403, message, 'FORBIDDEN');
  }
}
