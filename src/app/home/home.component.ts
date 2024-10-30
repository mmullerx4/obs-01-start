import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.pipe(
      filter((data: number) => data > 0), // Filter to emit only even numbers
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })
    ).subscribe({
      next: (data) => {
        console.log(data); // This will only log even rounds
      },
      error: (error) => {
        console.log(error);
        alert(error.message);
      },
      complete: () => {
        console.log('Completed!');
      }
    });

  } // ends ngOnInit

  ngOnDestroy(): void {
    if (this.firstObsSubscription) {
      this.firstObsSubscription.unsubscribe();
    }
  }
}
