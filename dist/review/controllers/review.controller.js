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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const accessToken_guard_1 = require("../../auth/guards/accessToken.guard");
const user_decorator_1 = require("../../utils/decorators/user.decorator");
const global_dto_1 = require("../../utils/dto/global.dto");
const newReview_dto_1 = require("../dto/newReview.dto");
const reviewsOfMedia_dto_1 = require("../dto/reviewsOfMedia.dto");
const updateReview_dto_1 = require("../dto/updateReview.dto");
const review_service_1 = require("../services/review.service");
let ReviewController = class ReviewController {
    constructor(ReviewService) {
        this.ReviewService = ReviewService;
    }
    getReviewsOfMedia({ mediaType, mediaId }, { page, limit }) {
        return this.ReviewService.getReviewsOfMedia({
            mediaType,
            mediaId,
            page,
            limit,
        });
    }
    getAllReviews(data) {
        return this.ReviewService.getAllReviews(data.userId);
    }
    createNewReview(data, { userId }) {
        return this.ReviewService.createNewReview(data, userId);
    }
    removeReviewById(reviewId) {
        return this.ReviewService.removeReviewById(reviewId);
    }
    updateReviewById(reviewId, { content }) {
        return this.ReviewService.updateReviewById(reviewId, content);
    }
};
__decorate([
    (0, common_1.Get)('media/:mediaType/:mediaId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reviewsOfMedia_dto_1.ReviewsOfMediaDto,
        global_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getReviewsOfMedia", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('list'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "getAllReviews", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newReview_dto_1.NewReviewDto, Object]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "createNewReview", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Delete)('remove/:reviewId'),
    __param(0, (0, common_1.Param)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "removeReviewById", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Patch)('update/:reviewId'),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateReview_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "updateReviewById", null);
ReviewController = __decorate([
    (0, common_1.Controller)('review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map