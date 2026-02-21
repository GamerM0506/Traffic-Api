import { TrafficSignGroup } from 'src/domain/enums';
export declare class TrafficSignResponseDto {
    id: number;
    code: string;
    name: string;
    description: string | null;
    imageUrl: string;
    group: TrafficSignGroup;
}
