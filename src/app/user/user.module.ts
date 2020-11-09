import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListingComponent, DetailComponent, CreateComponent],
  imports: [UserRoutingModule, SharedModule],
})
export class UserModule {}
