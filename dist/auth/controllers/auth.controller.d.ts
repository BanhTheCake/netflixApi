import { Response } from 'express';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { AuthService } from '../services/auth.service';
import { JWT, RefreshToken } from '../services/jwt.service';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    register(data: RegisterDto): Promise<import("../../utils/type").TR>;
    login(data: LoginDto, response: Response): Promise<import("../../utils/type").TR>;
    logout(userId: string, res: Response): Promise<import("../../utils/type").TR>;
    refreshToken(data: JWT<RefreshToken>): Promise<import("../../utils/type").TR>;
    persistLogin(data: JWT<RefreshToken>): Promise<import("../../utils/type").TR>;
    verifyRFToken(data: JWT<RefreshToken>): Promise<import("../../utils/type").TR>;
}
