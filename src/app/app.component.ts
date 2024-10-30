import { Component, OnDestroy, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activateSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activateSub = this.userService.activateEmitter.subscribe( didActivate => {
      this.userActivated = didActivate;
    });
  }
  ngOnDestroy(): void {
    this.activateSub.unsubscribe();
  }
}
