import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
    constructor(private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.userService.isLogged;
    }
}