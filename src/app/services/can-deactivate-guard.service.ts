import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface iDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuardService
  implements CanDeactivate<iDeactivateComponent>
{
  canDeactivate(
    component: iDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) {
    return component.canExit();
  }

  constructor() {}
}
