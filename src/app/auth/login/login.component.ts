import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackBarFailedComponent,
  SnackBarSuccessComponent,
} from 'src/app/shared/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    const { username } = this.form.value;
    if (username == 'admin') {
      this._snackBar.openFromComponent(SnackBarSuccessComponent, {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: 'mat-snack-bar-success',
        data: { title: 'Success !', message: 'Login successfully' },
      });

      this._router.navigateByUrl('/users');
      return;
    } else {
      this._snackBar.openFromComponent(SnackBarFailedComponent, {
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: 'mat-snack-bar-failed',
        data: {
          title: 'Failed !',
          message: 'Login failed. Username or password is incorrect.',
        },
      });
    }
  }
}
