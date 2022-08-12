import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { noExit } from '../shared/exit.model';

@Injectable({
  providedIn: 'root',
})
export class ExitService implements CanDeactivate<noExit> {
  constructor() {}
  canDeactivate(
    component: noExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
