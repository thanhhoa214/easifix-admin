import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'fixers',
    loadChildren: () =>
      import('./fixer/fixer.module').then((m) => m.FixerModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'templates', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
