import { Model } from 'sequelize-typescript';
export declare class Favorites extends Model {
    id: number;
    userId: string;
    mediaType: 'tv' | 'movie';
    mediaId: number;
    mediaTitle: string;
    mediaPoster: string;
    mediaRate: number;
}
