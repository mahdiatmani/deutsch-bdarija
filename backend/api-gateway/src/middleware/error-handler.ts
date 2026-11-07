import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { AppError } from '../lib/errors';

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  // Already sent response
  if (res.headersSent) return;

  // App errors (our custom errors)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
      ...(err.details && { details: err.details }),
    });
  }

  // Zod validation errors
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      code: 'VALIDATION_ERROR',
      details: err.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        return res.status(409).json({
          success: false,
          message: 'A record with this value already exists',
          code: 'DUPLICATE_ENTRY',
        });
      case 'P2025':
        return res.status(404).json({
          success: false,
          message: 'Record not found',
          code: 'NOT_FOUND',
        });
      default:
        console.error('Prisma error:', err.code, err.message);
        return res.status(500).json({
          success: false,
          message: 'Database error',
          code: 'DATABASE_ERROR',
        });
    }
  }

  // Multer errors
  if (err.message === 'Only image files are allowed (jpeg, png, gif, webp)') {
    return res.status(400).json({
      success: false,
      message: err.message,
      code: 'INVALID_FILE_TYPE',
    });
  }

  if ((err as any).code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      success: false,
      message: 'File too large. Maximum size is 5MB.',
      code: 'FILE_TOO_LARGE',
    });
  }

  // CORS errors
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      success: false,
      message: 'Origin not allowed',
      code: 'CORS_ERROR',
    });
  }

  // Unknown errors
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
    code: 'INTERNAL_ERROR',
  });
};
