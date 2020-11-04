import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent {}
