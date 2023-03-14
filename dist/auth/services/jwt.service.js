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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let TokenService = class TokenService {
    constructor(JwtService, configService) {
        this.JwtService = JwtService;
        this.configService = configService;
    }
    genAccessToken(payload) {
        return this.JwtService.sign(payload, {
            secret: this.configService.get('ACCESS_TOKEN'),
            expiresIn: this.configService.get('ACCESS_TOKEN_EX'),
        });
    }
    genRefreshToken(payload) {
        return this.JwtService.sign(payload, {
            secret: this.configService.get('REFRESH_TOKEN'),
            expiresIn: this.configService.get('REFRESH_TOKEN_EX'),
        });
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=jwt.service.js.map