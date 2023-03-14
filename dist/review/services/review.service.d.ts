import { NewReviewDto } from './../dto/newReview.dto';
import { Reviews } from 'src/Model/Entities/review.entity';
import { TR } from 'src/utils/type';
import { ReviewsOfMediaDto } from '../dto/reviewsOfMedia.dto';
import { PaginationDto } from 'src/utils/dto/global.dto';
export declare class ReviewService {
    private ReviewModel;
    constructor(ReviewModel: typeof Reviews);
    getReviewsOfMedia({ mediaId, mediaType, page, limit, }: ReviewsOfMediaDto & PaginationDto): Promise<TR>;
    getAllReviews(userId: string): Promise<TR>;
    createNewReview(data: NewReviewDto, userId: string): Promise<TR>;
    removeReviewById(reviewId: string): Promise<TR>;
    updateReviewById(reviewId: string, content: string): Promise<TR>;
}
