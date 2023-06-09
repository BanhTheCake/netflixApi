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
var RefreshTokenStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenStrategy = void 0;
const config_1 = require("@nestjs/config");
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
let RefreshTokenStrategy = RefreshTokenStrategy_1 = class RefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'RefreshToken') {
    constructor(ConfigService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                RefreshTokenStrategy_1.getTokenFromCookie,
            ]),
            ignoreExpiration: false,
            secretOrKey: ConfigService.get('REFRESH_TOKEN'),
        });
    }
    static getTokenFromCookie(req) {
        const { rfToken } = req.cookies;
        if (!rfToken)
            throw new common_1.UnauthorizedException();
        return rfToken;
    }
    async validate(payload) {
        return { userId: payload.userId, username: payload.username };
    }
};
RefreshTokenStrategy = RefreshTokenStrategy_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RefreshTokenStrategy);
exports.RefreshTokenStrategy = RefreshTokenStrategy;
//# sourceMappingURL=refreshToken.strategy.js.map