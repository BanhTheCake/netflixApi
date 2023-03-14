import { NewFavoritesDto } from '../dto/newFavorite.dto';
import { FavoriteService } from '../services/favorite.service';
import { AccessToken, JWT } from 'src/auth/services/jwt.service';
export declare class FavoriteController {
    private FavoriteService;
    constructor(FavoriteService: FavoriteService);
    getAllFavorites(data: JWT<AccessToken>): Promise<import("../../utils/type").TR>;
    createNewFavorite(data: NewFavoritesDto, { userId }: JWT<AccessToken>): Promise<import("../../utils/type").TR>;
    removeFavoriteByMediaId(mediaId: string): Promise<import("../../utils/type").TR>;
}
