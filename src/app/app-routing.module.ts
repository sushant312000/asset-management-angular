import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseEntryComponent } from './purchases/purchase-entry/purchase-entry.component';
import { PurchaseListComponent } from './purchases/purchase-list/purchase-list.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  {path: 'purchases', component:PurchasesComponent},
  {path: 'purchase-entry', component:PurchaseEntryComponent},
  {path: 'purchase-list', component:PurchaseListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
