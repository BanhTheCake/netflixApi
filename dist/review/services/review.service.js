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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const paginationFn_1 = require("../../utils/helpers/paginationFn");
const sequelize_1 = require("sequelize");
const handleError = (name, error) => {
    if (error.response)
        throw error;
    console.log('Error at ' + name + ': ', error);
    throw new common_1.InternalServerErrorException('Something wrong with server !');
};
let ReviewService = class ReviewService {
    constructor(ReviewModel) {
        this.ReviewModel = ReviewModel;
    }
    async getReviewsOfMedia({ mediaId, mediaType, page = 1, limit = 4, }) {
        try {
            const offset = (page - 1) * limit;
            const sqlQuery = `
      SELECT reviews.*, JSON_OBJECT('userId', users.userId, 'id', users.id, 'displayName', users.displayName, 'createdAt', users.createdAt, 'updatedAt', users.updatedAt) AS user
      FROM reviews
      INNER JOIN users ON reviews.userId = users.userId
      WHERE reviews.mediaType = '${mediaType}' AND reviews.mediaId = '${mediaId}'
      ORDER BY reviews.createdAt DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
            const reviews = await this.ReviewModel.sequelize.query(sqlQuery, {
                type: sequelize_1.QueryTypes.SELECT,
                raw: true,
                nest: true,
            });
            const pagination = (0, paginationFn_1.default)({
                limit: limit,
                page: page,
                total: reviews.length,
            });
            return {
                errCode: 0,
                msg: 'Ok',
                data: Object.assign({ reviews: reviews }, pagination),
            };
        }
        catch (error) {
            handleError('getReviewsOfMedia', error);
        }
    }
    async getAllReviews(userId) {
        try {
            const reviews = await this.ReviewModel.findAll({
                where: { userId },
                order: [['createdAt', 'DESC']],
            });
            return {
                errCode: 0,
                msg: 'Ok',
                data: reviews,
            };
        }
        catch (error) {
            handleError('getAllReviews', error);
        }
    }
    async createNewReview(data, userId) {
        try {
            await this.ReviewModel.create(Object.assign(Object.assign({}, data), { userId }));
            return {
                errCode: 0,
                msg: 'Create review success !',
            };
        }
        catch (error) {
            handleError('createNewReview', error);
        }
    }
    async removeReviewById(reviewId) {
        try {
            await this.ReviewModel.destroy({ where: { id: reviewId } });
            return {
                errCode: 0,
                msg: 'Delete review success !',
            };
        }
        catch (error) {
            handleError('removeReviewById', error);
        }
    }
    async updateReviewById(reviewId, content) {
        try {
            const currentReview = await this.ReviewModel.findOne({
                where: { id: reviewId },
            });
            if (!currentReview)
                throw new common_1.BadRequestException();
            currentReview.content = content;
            await currentReview.save();
            return {
                errCode: 0,
                msg: 'Ok',
                data: currentReview,
            };
        }
        catch (error) {
            handleError('updateReviewById', error);
        }
    }
};
ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REVIEWS')),
    __metadata("design:paramtypes", [Object])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map