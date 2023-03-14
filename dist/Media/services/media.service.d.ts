import { MediaListDto } from './../dto/mediaList.dto';
import { TR } from 'src/utils/type';
import { MediaDetailsDto } from '../dto/mediaDetails.dto';
import { MediaCreditsDto } from '../dto/mediaCredits';
import { MediaVideosDto } from '../dto/mediaVideos';
import { MediaImagesDto } from '../dto/mediaImages';
import { MediaGenresTypeDto } from '../dto/mediaGenresType';
import { MediaSearchDto } from '../dto/mediaSearch';
import { MediaRecommendDto } from '../dto/mediaRecommend.dto';
export declare class MediaService {
    getMediaList(data: MediaListDto, page: string): Promise<TR>;
    getMediaDetails(data: MediaDetailsDto): Promise<TR>;
    getMediaCredits(data: MediaCreditsDto): Promise<TR>;
    getMediaVideos(data: MediaVideosDto): Promise<TR>;
    getMediaImages(data: MediaImagesDto): Promise<TR>;
    getMediaRecommends(data: MediaRecommendDto): Promise<TR>;
    getGenresOfType(data: MediaGenresTypeDto): Promise<TR>;
    searchWithKW(data: MediaSearchDto, query: string, page: string): Promise<TR>;
    getPersonDetails(personId: string): Promise<TR>;
    getPersonCombinedCredits(personId: string): Promise<TR>;
}
