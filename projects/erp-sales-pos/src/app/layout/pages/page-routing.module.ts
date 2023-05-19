import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../core/gards/auth.guard';

const routes: Routes = [
    // Default path: Dashboard
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // Dashboard page
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },


    // Add more routes as needed

    // Fallback route: Page not found
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
