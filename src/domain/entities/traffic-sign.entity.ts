import { TrafficSignGroup } from '../enums';
import { Url } from '../value-objects';

export class TrafficSign {
    constructor(
        public readonly id: number | null,
        public readonly code: string,
        public readonly name: string,
        public readonly description: string | null,
        public readonly imageUrl: Url,
        public readonly group: TrafficSignGroup
    ) { }
}