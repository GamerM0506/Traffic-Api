import { BookmarkType } from '../enums';

export class UserBookmark {
    constructor(
        public readonly id: number | null,
        public readonly userId: number,
        public readonly questionId: number,
        public readonly bookmarkType: BookmarkType,
        public readonly note: string | null,
        public readonly createdAt?: Date
    ) { }
}