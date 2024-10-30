import { EventEmitter, Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'}) //do this instead of adding to appmodule providers?
export class UserService {
  //activateEmitter = new EventEmitter<boolean>(); //this is old way. You can now use a subject
  activateEmitter = new Subject<boolean>();
}
