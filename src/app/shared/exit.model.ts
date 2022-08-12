import { Observable } from 'rxjs';

export interface noExit {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
