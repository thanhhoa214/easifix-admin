import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarSuccessComponent } from '../snack-bar-success/snack-bar-success.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() toggleSidebar = new EventEmitter();
  constructor(private _router: Router, private _snackBar: MatSnackBar) {}

  notificationCount = 2;
  mailCount = 2;

  logout() {
    this._snackBar.openFromComponent(SnackBarSuccessComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: 'mat-snack-bar-success',
      data: { title: 'Success !', message: 'Logout successfully' },
    });

    this._router.navigateByUrl('/auth');
  }
}
