import { BookmarkType } from '../enums';
export declare class UserBookmark {
    readonly id: number | null;
    readonly userId: number;
    readonly questionId: number;
    readonly bookmarkType: BookmarkType;
    readonly note: string | null;
    readonly createdAt?: Date;
    constructor(id: number | null, userId: number, questionId: number, bookmarkType: BookmarkType, note: string | null, createdAt?: Date);
}
