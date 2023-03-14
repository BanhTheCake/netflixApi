"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_service_1 = require("./jwt.service");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const argon2 = require("argon2");
const cookie_config_1 = require("../../utils/configOptions/cookie.config");
const handleError = (name, error) => {
    if (error.response)
        throw error;
    console.log('error at ' + name + ' :', error);
    throw new common_1.InternalServerErrorException('Something wrong with server !');
};
let AuthService = class AuthService {
    constructor(UsersModel, TokenService) {
        this.UsersModel = UsersModel;
        this.TokenService = TokenService;
    }
    async register(data) {
        try {
            const duplicateUser = await this.UsersModel.findOne({
                where: { username: data.username },
            });
            if (duplicateUser) {
                return {
                    errCode: 1,
                    msg: 'Username has been exist in out system',
                };
            }
            const hashPassword = await argon2.hash(data.password);
            const userCreate = Object.assign(Object.assign({}, data), { password: hashPassword, userId: (0, uuid_1.v4)() });
            await this.UsersModel.create(Object.assign({}, userCreate));
            return {
                errCode: 0,
                msg: 'Create account success !',
            };
        }
        catch (error) {
            handleError('register', error);
        }
    }
    async login(data, response) {
        try {
            const user = await this.UsersModel.findOne({
                where: { username: data.username },
            });
            if (!user) {
                return {
                    errCode: 1,
                    msg: 'Username or password is incorrect !',
                };
            }
            const isMatch = await argon2.verify(user.password, data.password);
            if (!isMatch) {
                return {
                    errCode: 1,
                    msg: 'Username or password is incorrect !',
                };
            }
            const accessToken = this.TokenService.genAccessToken({
                userId: user.userId,
                username: user.username,
            });
            const refreshToken = this.TokenService.genRefreshToken({
                userId: user.userId,
                username: user.username,
            });
            const plainUser = user.get({ plain: true });
            delete plainUser.password;
            response.cookie('rfToken', refreshToken, cookie_config_1.cookieConfig);
            return {
                errCode: 0,
                msg: 'Login success !',
                data: {
                    token: accessToken,
                    user: plainUser,
                },
            };
        }
        catch (error) {
            handleError('Login', error);
        }
    }
    async logout(userId, res) {
        try {
            const user = await this.UsersModel.findOne({ where: { userId } });
            if (!user)
                throw new common_1.BadRequestException('User is not exist in out system');
            res.cookie('rfToken', null, cookie_config_1.cookieConfig);
            return {
                errCode: 0,
                msg: 'Logout success',
            };
        }
        catch (error) {
            handleError('logout', error);
        }
    }
    async refreshToken(userId) {
        try {
            const user = await this.UsersModel.findOne({ where: { userId } });
            if (!user)
                throw new common_1.UnauthorizedException();
            const accessToken = this.TokenService.genAccessToken({
                userId: user.userId,
                username: user.username,
            });
            return {
                errCode: 0,
                msg: 'Ok',
                data: { token: accessToken },
            };
        }
        catch (error) {
            handleError('refreshToken', error);
        }
    }
    async persistLogin(userId) {
        try {
            const user = await this.UsersModel.findOne({ where: { userId } });
            if (!user)
                throw new common_1.UnauthorizedException();
            const accessToken = this.TokenService.genAccessToken({
                userId: user.userId,
                username: user.username,
            });
            const plainUser = user.get({ plain: true });
            delete plainUser.password;
            return {
                errCode: 0,
                msg: 'Ok',
                data: {
                    token: accessToken,
                    user: plainUser,
                },
            };
        }
        catch (error) {
            handleError('persistLogin', error);
        }
    }
    async verifyRFToken(userId) {
        try {
            const user = await this.UsersModel.findOne({ where: { userId } });
            if (!user)
                throw new common_1.UnauthorizedException();
            return {
                errCode: 0,
                msg: 'Accept',
            };
        }
        catch (error) {
            handleError('verifyRFToken', error);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS')),
    __metadata("design:paramtypes", [Object, jwt_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map