import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  fixer: User;
  name: string;
  avatar: string;
  address: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const {
      0: name,
      1: address,
      2: avatar,
    } = this._activatedRoute.snapshot.queryParams;
    console.log(this._activatedRoute.snapshot.queryParams);

    this.name = name;
    this.avatar = avatar;
    this.address = address;
    this.fixer = this._dataService.getUser('1');
  }
  getPagingArray(totolItem: number) {
    const pageCount = Math.round(totolItem);
    return Array(pageCount).fill(1);
  }
  back() {
    this._router.navigateByUrl('/fixers');
  }
}
