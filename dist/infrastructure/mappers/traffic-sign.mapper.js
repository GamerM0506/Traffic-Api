"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficSignMapper = void 0;
const traffic_sign_entity_1 = require("../../domain/entities/traffic-sign.entity");
const value_objects_1 = require("../../domain/value-objects");
class TrafficSignMapper {
    static toDomain(raw) {
        return new traffic_sign_entity_1.TrafficSign(raw.id, raw.code, raw.name, raw.description, new value_objects_1.Url(raw.imageUrl), raw.group);
    }
}
exports.TrafficSignMapper = TrafficSignMapper;
//# sourceMappingURL=traffic-sign.mapper.js.map