import { NgModule } from '@angular/core';

import { FixerRoutingModule } from './fixer-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { BanComponent } from './listing/ban/ban.component';

@NgModule({
  declarations: [ListingComponent, DetailComponent, CreateComponent, BanComponent],
  imports: [FixerRoutingModule, SharedModule],
})
export class FixerModule {}
