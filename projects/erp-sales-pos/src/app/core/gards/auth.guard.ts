import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

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
    // Add your own logic here to check if the user is logged in
    // For example, you can check if there is a valid authentication token or session
    // Return true if the user is logged in, or false if not
    return false; // Replace with your own logic
  }
}
