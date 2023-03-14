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
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const media_service_1 = require("../services/media.service");
const mediaList_dto_1 = require("../dto/mediaList.dto");
const mediaDetails_dto_1 = require("../dto/mediaDetails.dto");
const mediaCredits_1 = require("../dto/mediaCredits");
const mediaVideos_1 = require("../dto/mediaVideos");
const mediaImages_1 = require("../dto/mediaImages");
const mediaGenresType_1 = require("../dto/mediaGenresType");
const mediaSearch_1 = require("../dto/mediaSearch");
const mediaRecommend_dto_1 = require("../dto/mediaRecommend.dto");
let MediaController = class MediaController {
    constructor(MediaService) {
        this.MediaService = MediaService;
    }
    getMediaList(data, page = '1') {
        return this.MediaService.getMediaList(data, page);
    }
    getMediaDetails(data) {
        return this.MediaService.getMediaDetails(data);
    }
    getMediaCredits(data) {
        return this.MediaService.getMediaCredits(data);
    }
    getMediaVideos(data) {
        return this.MediaService.getMediaVideos(data);
    }
    getMediaImages(data) {
        return this.MediaService.getMediaImages(data);
    }
    getMediaRecommends(data) {
        return this.MediaService.getMediaRecommends(data);
    }
    getGenresOfType(data) {
        return this.MediaService.getGenresOfType(data);
    }
    searchWithKeyword(data, { query, page = '1' }) {
        return this.MediaService.searchWithKW(data, query, page);
    }
    getPersonDetails(personId) {
        return this.MediaService.getPersonDetails(personId);
    }
    getPersonCombinedCredits(personId) {
        return this.MediaService.getPersonCombinedCredits(personId);
    }
};
__decorate([
    (0, common_1.Get)('list/:mediaType/:mediaCategory'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaList_dto_1.MediaListDto, String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaList", null);
__decorate([
    (0, common_1.Get)('details/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaDetails_dto_1.MediaDetailsDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaDetails", null);
__decorate([
    (0, common_1.Get)('credits/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaCredits_1.MediaCreditsDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaCredits", null);
__decorate([
    (0, common_1.Get)('videos/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaVideos_1.MediaVideosDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaVideos", null);
__decorate([
    (0, common_1.Get)('images/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaImages_1.MediaImagesDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaImages", null);
__decorate([
    (0, common_1.Get)('recommends/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaRecommend_dto_1.MediaRecommendDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMediaRecommends", null);
__decorate([
    (0, common_1.Get)('genres/:mediaType'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaGenresType_1.MediaGenresTypeDto]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getGenresOfType", null);
__decorate([
    (0, common_1.Get)('search/:mediaType'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mediaSearch_1.MediaSearchDto, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "searchWithKeyword", null);
__decorate([
    (0, common_1.Get)('person/details/:personId'),
    __param(0, (0, common_1.Param)('personId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getPersonDetails", null);
__decorate([
    (0, common_1.Get)('person/combinedCredits/:personId'),
    __param(0, (0, common_1.Param)('personId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getPersonCombinedCredits", null);
MediaController = __decorate([
    (0, common_1.Controller)('media'),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaController);
exports.MediaController = MediaController;
//# sourceMappingURL=media.controller.js.map