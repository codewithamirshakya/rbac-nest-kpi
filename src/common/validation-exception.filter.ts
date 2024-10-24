
import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    UnprocessableEntityException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';

@Catch(UnprocessableEntityException)
export class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = 422;

        const validationErrors = exception.getResponse() as {
            message: ValidationError[];
        };

        response.status(status).json({
            statusCode: status,
            message: validationErrors.message,
            error: 'Unprocessable Entity',
        });
    }
}
