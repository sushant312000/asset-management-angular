import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Purchases } from './purchases';
import { Status } from './status';
import { Vendor } from './vendor';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  formPurchaseDate: Purchases = new Purchases();

  purchases: Purchases[];
  assets: Asset[];
  vendors: Vendor[];
  status: Status[];

  constructor(private httpClient: HttpClient) { }

  //Get all purchases
  getAllPurchases(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/purchase');
  }

  //Get all purchases for binding
  bindGetAllPurchases() {
    this.httpClient.get(environment.apiUrl + '/api/purchase')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.purchases = response as Purchases[];
        }
      );
  }

  //Get all assets for binding
  bindGetAllAsset() {
    this.httpClient.get(environment.apiUrl + '/api/assets')
      .toPromise()
      .then(
        (data) => {
          console.log(data);
          this.assets = data as Asset[];
        }
      );
  }

  //Get all vendors for binding
  bindGetAllVendors() {
    this.httpClient.get(environment.apiUrl + '/api/vendors')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.vendors = response as Vendor[];
        }
      );
  }

  //Gett all status for binding
  bindGetAllStatus() {
    this.httpClient.get(environment.apiUrl + '/api/status')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.status = response as Status[];
        }
      );
  }

  //Insert Purchase
  insertPurchase(purchase: Purchases): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/purchase', purchase);
  }

  //Update Purchase
  updatePurchase(purchase: Purchases): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/purchase', purchase);
  }

  //Get particular purchase by Id
  getPurchaseById(purchaseId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/purchase/' + purchaseId);
  }

  //delete a purchase
  deletePurchaseById(purchaseId: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/api/purchase/' + purchaseId);
  }
}
