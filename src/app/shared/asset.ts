import { AssetType } from "./asset-type";

export class Asset {
    assetID: number = 0;
    assetName: string = "";
    ishardware: boolean;
    assetType: AssetType;
}
