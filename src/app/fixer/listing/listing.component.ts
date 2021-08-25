import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { BanComponent } from './ban/ban.component';

export interface DialogData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  selectedPage = 1;
  banUsers = [];

  constructor(
    public dataService: DataService,
    private dialog: MatDialog,
    private changeDetector: ChangeDetectorRef
  ) {
    this.banUsers = JSON.parse(localStorage.getItem('bannedUsers')) ?? [];
  }
  getPagingArray(totolItem: number) {
    const pageCount = Math.round(totolItem);
    return Array(pageCount).fill(1);
  }

  banUser(event: Event, userId: number, userName: string) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const dialogRef = this.dialog.open(BanComponent, {
      width: '250px',
      data: { id: userId, name: userName },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.banUsers.push(userId);
        localStorage.setItem('bannedUsers', JSON.stringify(this.banUsers));
      }
    });
  }
  permitUser(event: Event, userId: number, userName: string) {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log(this.banUsers);

    this.banUsers = this.banUsers.filter((user) => user.id !== userId);
    this.changeDetector.detectChanges();
    localStorage.setItem('bannedUsers', JSON.stringify(this.banUsers));
  }
}
