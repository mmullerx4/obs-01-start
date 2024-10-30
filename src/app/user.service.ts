import
{ EventEmitter,
Injectable,
Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) //do this instead of adding to appmodule providers?
export class UserService {
  activateEmitter = new EventEmitter<boolean>();
}
