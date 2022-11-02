import { Asset } from "./asset";
import { Status } from "./status";
import { Vendor } from "./vendor";

export class Purchases {
    purchaseOrderId: number = 0;
    orderNumber: number = 0;
    asset: Asset;
    quantity: number = 0;
    vendor: Vendor;
    orderDate: Date;
    deliveryDate: Date;
    status: Status;
}
