import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingComponent {
  selectedPage: number = 1;
  constructor(public dataService: DataService) {}
  getPagingArray(totolItem: number) {
    const pageCount = Math.round(totolItem);
    return Array(pageCount).fill(1);
  }
}
