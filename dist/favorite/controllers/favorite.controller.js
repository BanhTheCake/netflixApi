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
exports.FavoriteController = void 0;
const accessToken_guard_1 = require("./../../auth/guards/accessToken.guard");
const common_1 = require("@nestjs/common");
const newFavorite_dto_1 = require("../dto/newFavorite.dto");
const favorite_service_1 = require("../services/favorite.service");
const user_decorator_1 = require("../../utils/decorators/user.decorator");
let FavoriteController = class FavoriteController {
    constructor(FavoriteService) {
        this.FavoriteService = FavoriteService;
    }
    getAllFavorites(data) {
        return this.FavoriteService.getAllFavorites(data.userId);
    }
    createNewFavorite(data, { userId }) {
        return this.FavoriteService.createNewFavorite(data, userId);
    }
    removeFavoriteByMediaId(mediaId) {
        return this.FavoriteService.removeFavoriteByMediaId(mediaId);
    }
};
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('list'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "getAllFavorites", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newFavorite_dto_1.NewFavoritesDto, Object]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "createNewFavorite", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Delete)('remove/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "removeFavoriteByMediaId", null);
FavoriteController = __decorate([
    (0, common_1.Controller)('favorite'),
    __metadata("design:paramtypes", [favorite_service_1.FavoriteService])
], FavoriteController);
exports.FavoriteController = FavoriteController;
//# sourceMappingURL=favorite.controller.js.map