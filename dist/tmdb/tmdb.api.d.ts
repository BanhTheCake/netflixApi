export type TMediaType = 'tv' | 'movie';
export type TMediaCategory = 'popular' | 'top_rated';
declare const tmdbApi: {
    mediaList: (mediaType: TMediaType, mediaCategory: TMediaCategory, page: string) => string;
    mediaDetails: (mediaType: TMediaType, mediaId: string) => string;
    mediaCredits: (mediaType: TMediaType, mediaId: string) => string;
    mediaVideos: (mediaType: TMediaType, mediaId: string) => string;
    mediaRecommend: (mediaType: TMediaType, mediaId: string) => string;
    mediaImages: (mediaType: TMediaType, mediaId: string) => string;
    genres: (mediaType: TMediaType) => string;
    search: (mediaType: TMediaType | 'person', page: string, query: string) => string;
    personDetails: (personId: string) => string;
    personCombineCredits: (personId: string) => string;
};
export default tmdbApi;
