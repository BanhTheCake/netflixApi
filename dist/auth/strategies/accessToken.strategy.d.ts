import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AccessToken, JWT } from '../services/jwt.service';
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor(ConfigService: ConfigService);
    validate(payload: JWT<AccessToken>): Promise<{
        userId: string;
        username: string;
    }>;
}
export {};
