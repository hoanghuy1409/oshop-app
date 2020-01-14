import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminAuthGuard {
  constructor(private auth: AuthService, private userService: UserService) {}

  // canActivate(): Observable<boolean> {
  //   return this.auth.user$.pipe(map(appUser => appUser.isAdmin));
  // }
}
