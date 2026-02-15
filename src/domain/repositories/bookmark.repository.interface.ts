import { UserBookmark } from '../entities/user-bookmark.entity';
import { BookmarkType } from '../enums';

export interface IBookmarkRepository {
    addBookmark(bookmark: UserBookmark): Promise<UserBookmark>;
    removeBookmark(userId: number, questionId: number, type: BookmarkType): Promise<void>;
    findByUserId(userId: number, type?: BookmarkType): Promise<UserBookmark[]>;
}