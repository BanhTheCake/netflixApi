import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { JWT, RefreshToken } from '../services/jwt.service';
import { Request } from 'express';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor(ConfigService: ConfigService);
    static getTokenFromCookie(req: Request): any;
    validate(payload: JWT<RefreshToken>): Promise<{
        userId: string;
        username: string;
    }>;
}
export {};
