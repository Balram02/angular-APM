import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = next.url[1].toString();
    console.log(id);
    if (id == null || id === '') {
      alert('Product not found!');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
