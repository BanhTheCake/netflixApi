"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const tmdb_services_1 = require("../../tmdb/tmdb.services");
const handleError = (name, error) => {
    if (error.response)
        throw error;
    console.log('error at ' + name + ' :', error);
    throw new common_1.InternalServerErrorException('Something wrong with server !');
};
let MediaService = class MediaService {
    async getMediaList(data, page) {
        try {
            const res = await tmdb_services_1.default.getMediaList(data.mediaType, data.mediaCategory, page);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaList', error);
        }
    }
    async getMediaDetails(data) {
        try {
            const res = await tmdb_services_1.default.getMediaDetails(data.mediaType, data.mediaId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaDetails', error);
        }
    }
    async getMediaCredits(data) {
        try {
            const res = await tmdb_services_1.default.getMediaCredits(data.mediaType, data.mediaId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaCredits', error);
        }
    }
    async getMediaVideos(data) {
        try {
            const res = await tmdb_services_1.default.getMediaVideos(data.mediaType, data.mediaId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaVideos', error);
        }
    }
    async getMediaImages(data) {
        try {
            const res = await tmdb_services_1.default.getMediaImages(data.mediaType, data.mediaId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaImages', error);
        }
    }
    async getMediaRecommends(data) {
        try {
            const res = await tmdb_services_1.default.getMediaRecommend(data.mediaType, data.mediaId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getMediaImages', error);
        }
    }
    async getGenresOfType(data) {
        try {
            const res = await tmdb_services_1.default.getGenres(data.mediaType);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getGenresOfType', error);
        }
    }
    async searchWithKW(data, query, page) {
        try {
            const res = await tmdb_services_1.default.searchWithKeyword(data.mediaType, page, query);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('getGenresOfType', error);
        }
    }
    async getPersonDetails(personId) {
        try {
            const res = await tmdb_services_1.default.getPersonDetails(personId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('GetPersonDetails', error);
        }
    }
    async getPersonCombinedCredits(personId) {
        try {
            const res = await tmdb_services_1.default.getPersonCombinedCredits(personId);
            return {
                errCode: 0,
                msg: 'Ok',
                data: res.data,
            };
        }
        catch (error) {
            handleError('GetPersonCombinedCredits', error);
        }
    }
};
MediaService = __decorate([
    (0, common_1.Injectable)()
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map