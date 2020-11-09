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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params.id;
    this.fixer = this._dataService.getUser(id);
    console.log(id);
  }
  getPagingArray(totolItem: number) {
    const pageCount = Math.round(totolItem);
    return Array(pageCount).fill(1);
  }
  back() {
    this._router.navigateByUrl('/fixers');
  }
}
