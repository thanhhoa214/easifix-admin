import { NgModule } from '@angular/core';

import { FixerRoutingModule } from './fixer-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListingComponent, DetailComponent],
  imports: [FixerRoutingModule, SharedModule],
})
export class FixerModule {}
