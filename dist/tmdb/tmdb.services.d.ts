import { TMediaCategory, TMediaType } from './tmdb.api';
declare const TmdbServices: {
    getMediaList: (mediaType: TMediaType, mediaCategory: TMediaCategory, page: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMediaDetails: (mediaType: TMediaType, mediaId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMediaCredits: (mediaType: TMediaType, mediaId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMediaVideos: (mediaType: TMediaType, mediaId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMediaRecommend: (mediaType: TMediaType, mediaId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getMediaImages: (mediaType: TMediaType, mediaId: any) => Promise<import("axios").AxiosResponse<any, any>>;
    getGenres: (mediaType: TMediaType) => Promise<import("axios").AxiosResponse<any, any>>;
    searchWithKeyword: (mediaType: TMediaType | 'person', page: string, query: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getPersonDetails: (personId: string) => Promise<import("axios").AxiosResponse<any, any>>;
    getPersonCombinedCredits: (personId: string) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default TmdbServices;
