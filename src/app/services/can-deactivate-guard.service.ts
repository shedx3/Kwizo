import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CreateQuizComponent } from '../pages/create-quiz/create-quiz.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuardService
  implements CanDeactivate<CreateQuizComponent>
{
  canDeactivate(
    component: CreateQuizComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) {
    return component.canExit();
  }

  constructor() {}
}