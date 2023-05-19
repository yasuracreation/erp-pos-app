import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/gards/auth.guard';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    canActivate:[AuthGuard],
    path: 'pages', loadChildren: () => import('./layout/pages/page.module').then(m => m.PageModule)
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'pages' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
