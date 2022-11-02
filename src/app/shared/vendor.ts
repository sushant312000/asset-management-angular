import { VendorType } from "./vendor-type";

export class Vendor {
    vendorId: number = 0;
    vendorName: string = "";
    validFrom: Date;
    validTo: Date;
    address: string = "";
    vendorType: VendorType;
}
