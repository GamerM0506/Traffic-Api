import { TrafficSignGroup } from '../enums';
import { Url } from '../value-objects';
export declare class TrafficSign {
    readonly id: number | null;
    readonly code: string;
    readonly name: string;
    readonly description: string | null;
    readonly imageUrl: Url;
    readonly group: TrafficSignGroup;
    constructor(id: number | null, code: string, name: string, description: string | null, imageUrl: Url, group: TrafficSignGroup);
}
