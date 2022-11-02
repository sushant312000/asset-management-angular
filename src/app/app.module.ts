import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseEntryComponent } from './purchases/purchase-entry/purchase-entry.component';
import { PurchaseListComponent } from './purchases/purchase-list/purchase-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PurchaseService } from '../app/shared/purchase.service';

@NgModule({
  declarations: [
    AppComponent,
    PurchasesComponent,
    PurchaseEntryComponent,
    PurchaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // Ng2SearchPipeModule
  ],
  providers: [PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
