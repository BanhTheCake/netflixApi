import { Favorites } from 'src/Model/Entities/favorite.entity';
import { TR } from 'src/utils/type';
import { NewFavoritesDto } from '../dto/newFavorite.dto';
export declare class FavoriteService {
    private favoritesModel;
    constructor(favoritesModel: typeof Favorites);
    getAllFavorites(userId: string): Promise<TR>;
    createNewFavorite(data: NewFavoritesDto, userId: string): Promise<TR>;
    removeFavoriteByMediaId(mediaId: string): Promise<TR>;
}
