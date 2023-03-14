import { TokenService } from './jwt.service';
import { RegisterDto } from './../dto/register.dto';
import { Users } from 'src/Model/Entities/user.entity';
import { TR } from 'src/utils/type';
import { LoginDto } from '../dto/login.dto';
import { Response } from 'express';
export declare class AuthService {
    private UsersModel;
    private TokenService;
    constructor(UsersModel: typeof Users, TokenService: TokenService);
    register(data: RegisterDto): Promise<TR>;
    login(data: LoginDto, response: Response): Promise<TR>;
    logout(userId: string, res: Response): Promise<TR>;
    refreshToken(userId: string): Promise<TR>;
    persistLogin(userId: string): Promise<TR>;
    verifyRFToken(userId: string): Promise<TR>;
}
