import { NgModule } from '@angular/core';

import { TransactionRoutingModule } from './transaction-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListingComponent, DetailComponent],
  imports: [TransactionRoutingModule, SharedModule],
})
export class TransactionModule {}
