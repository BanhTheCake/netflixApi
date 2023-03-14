import { AccessToken, JWT } from 'src/auth/services/jwt.service';
import { PaginationDto } from 'src/utils/dto/global.dto';
import { NewReviewDto } from '../dto/newReview.dto';
import { ReviewsOfMediaDto } from '../dto/reviewsOfMedia.dto';
import { UpdateReviewDto } from '../dto/updateReview.dto';
import { ReviewService } from '../services/review.service';
export declare class ReviewController {
    private ReviewService;
    constructor(ReviewService: ReviewService);
    getReviewsOfMedia({ mediaType, mediaId }: ReviewsOfMediaDto, { page, limit }: PaginationDto): Promise<import("../../utils/type").TR>;
    getAllReviews(data: JWT<AccessToken>): Promise<import("../../utils/type").TR>;
    createNewReview(data: NewReviewDto, { userId }: JWT<AccessToken>): Promise<import("../../utils/type").TR>;
    removeReviewById(reviewId: string): Promise<import("../../utils/type").TR>;
    updateReviewById(reviewId: string, { content }: UpdateReviewDto): Promise<import("../../utils/type").TR>;
}
