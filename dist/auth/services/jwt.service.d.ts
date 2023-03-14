import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export type AccessToken = {
    userId: string;
    username: string;
};
export type RefreshToken = {
    userId: string;
    username: string;
};
export type JWT<T> = T & {
    iat: string;
    exp: string;
};
export declare class TokenService {
    private JwtService;
    private configService;
    constructor(JwtService: JwtService, configService: ConfigService);
    genAccessToken(payload: AccessToken): string;
    genRefreshToken(payload: RefreshToken): string;
}
