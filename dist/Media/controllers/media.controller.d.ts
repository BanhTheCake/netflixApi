import { MediaService } from '../services/media.service';
import { MediaListDto } from '../dto/mediaList.dto';
import { MediaDetailsDto } from '../dto/mediaDetails.dto';
import { MediaCreditsDto } from '../dto/mediaCredits';
import { MediaVideosDto } from '../dto/mediaVideos';
import { MediaImagesDto } from '../dto/mediaImages';
import { MediaGenresTypeDto } from '../dto/mediaGenresType';
import { MediaSearchDto } from '../dto/mediaSearch';
import { MediaRecommendDto } from '../dto/mediaRecommend.dto';
export declare class MediaController {
    private MediaService;
    constructor(MediaService: MediaService);
    getMediaList(data: MediaListDto, page?: string): Promise<import("../../utils/type").TR>;
    getMediaDetails(data: MediaDetailsDto): Promise<import("../../utils/type").TR>;
    getMediaCredits(data: MediaCreditsDto): Promise<import("../../utils/type").TR>;
    getMediaVideos(data: MediaVideosDto): Promise<import("../../utils/type").TR>;
    getMediaImages(data: MediaImagesDto): Promise<import("../../utils/type").TR>;
    getMediaRecommends(data: MediaRecommendDto): Promise<import("../../utils/type").TR>;
    getGenresOfType(data: MediaGenresTypeDto): Promise<import("../../utils/type").TR>;
    searchWithKeyword(data: MediaSearchDto, { query, page }: {
        page: string;
        query: string;
    }): Promise<import("../../utils/type").TR>;
    getPersonDetails(personId: string): Promise<import("../../utils/type").TR>;
    getPersonCombinedCredits(personId: string): Promise<import("../../utils/type").TR>;
}
