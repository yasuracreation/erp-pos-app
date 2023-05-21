import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from 'cor-lib';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    // Check if the user is logged in (your own logic)
    const isLoggedIn = this.checkIfLoggedIn();

    if (isLoggedIn) {
      return true; // User is logged in, allow navigation
    } else {
      // User is not logged in, redirect to the login page
      return this.router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url }
      });
    }
  }

  private checkIfLoggedIn(): boolean {

    return this.authService.getAuthorizedUser(); // Replace with your own logic
  }
}
