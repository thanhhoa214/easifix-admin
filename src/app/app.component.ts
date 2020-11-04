import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') public drawer: MatDrawer;
  isInLoginPage = false;
  isLessThanSmall$: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver, router: Router) {
    this.isLessThanSmall$ = breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map((state) => state.matches),
        shareReplay({
          refCount: false,
        })
      );
    router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        const { urlAfterRedirects } = e as NavigationEnd;
        this.isInLoginPage = urlAfterRedirects.includes('login');
      }
    });
  }
}
