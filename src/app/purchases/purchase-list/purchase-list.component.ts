import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/shared/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  constructor(public purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.purchaseService.bindGetAllPurchases();
  }

  getAllPurchaseList(){
    this.purchaseService.getAllPurchases().subscribe(
      (response) => {
        console.log("Retrieving");
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
