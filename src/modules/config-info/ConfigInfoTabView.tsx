import { findConfigInfoData } from './configInfoService';
import MapTabView from '../common/MapTabView';
import { NamedMap } from '../common/entities/NamedMap';
import { MapEntry } from "../common/entities/MapEntry";

export default class ConfigInfoTabView extends MapTabView {
    findData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void): void {
        findConfigInfoData(url, onSuccess);
    }
}