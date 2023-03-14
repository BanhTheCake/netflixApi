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
exports.FavoriteService = void 0;
const common_1 = require("@nestjs/common");
const handleError = (name, error) => {
    if (error.response)
        throw error;
    console.log('Error at ' + name + ': ', error);
    throw new common_1.InternalServerErrorException('Something wrong with server !');
};
let FavoriteService = class FavoriteService {
    constructor(favoritesModel) {
        this.favoritesModel = favoritesModel;
    }
    async getAllFavorites(userId) {
        try {
            const favorites = await this.favoritesModel.findAll({
                where: { userId },
                order: [['createdAt', 'DESC']],
            });
            return {
                errCode: 0,
                msg: 'Ok',
                data: {
                    favorites,
                },
            };
        }
        catch (error) {
            handleError('getAllFavorites', error);
        }
    }
    async createNewFavorite(data, userId) {
        try {
            const duplicateFavorite = await this.favoritesModel.findOne({
                where: { mediaId: data.mediaId },
            });
            if (duplicateFavorite)
                throw new common_1.BadRequestException('Favorite has been add in out system !');
            await this.favoritesModel.create(Object.assign(Object.assign({}, data), { userId: userId }));
            return {
                errCode: 0,
                msg: 'Create favorite success !',
            };
        }
        catch (error) {
            handleError('createNewFavorite', error);
        }
    }
    async removeFavoriteByMediaId(mediaId) {
        try {
            await this.favoritesModel.destroy({ where: { mediaId: mediaId } });
            return {
                errCode: 0,
                msg: 'Remove favorite success !',
            };
        }
        catch (error) {
            handleError('removeFavoriteByMediaId', error);
        }
    }
};
FavoriteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FAVORITES')),
    __metadata("design:paramtypes", [Object])
], FavoriteService);
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=favorite.service.js.map