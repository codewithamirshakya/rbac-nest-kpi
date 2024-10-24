// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class Response {

    static successResponse(data: any): object {
        return {
            'body': data
        };
    }
}
