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
  randomName(): string {
    const firstNames = ['Nguyễn', 'Trần', 'Đào', 'Đỗ', 'Lê'];
    const subNames = ['Thanh', 'Văn', 'Trung', 'Bá'];
    const names = ['Giao', 'Hào', 'Huy', 'Duyên', 'Nhi', 'Thủy'];
    return `${firstNames[this.getNumber(firstNames.length)]} ${
      subNames[this.getNumber(subNames.length)]
    } ${names[this.getNumber(names.length)]} `;
  }
  randomAddresses() {
    const addresses = [
      '29 Hàn Thuyên',
      '23 Võ Văn Tần',
      '79 Phan Tôn',
      '30 Tô Ký',
      '50 Phan Định Của',
      '34 Trần Bá Giao',
    ];
    const randomNumber = this.getNumber(addresses.length);
    return (
      addresses[randomNumber] +
      ', Quận ' +
      (Math.floor(Math.random() * 11) + 1) +
      ', TP.HCM'
    );
  }
  getNumber(length: number) {
    return Math.floor(Math.random() * length);
  }
}
