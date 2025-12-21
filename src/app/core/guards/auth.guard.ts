import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

import {CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot,
Router,
UrlTree,
} from '@angular/router';

@Injectable({
providedIn: 'root',
})
export class AuthGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router) {}

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> {
    return of(this.authService.isAuthenticated()).pipe(
        take(1),
        map((isAuthenticated) => {
            if (isAuthenticated) {
                return true;
            }
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        })
    );
}
}