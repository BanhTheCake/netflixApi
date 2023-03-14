import { TMediaType } from './../../tmdb/tmdb.api';
export declare class NewReviewDto {
    mediaType: TMediaType;
    mediaId: number;
    mediaTitle: string;
    mediaPoster: string;
    content: string;
}
