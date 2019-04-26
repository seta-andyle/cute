import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cute';
  constructor() {

    // observable giống với function
    // có thể return nhiều lần 
    // là đồng bộ

    // const foo = new Observable(subscriber => {
    //   try {
    //     subscriber.next(11);
    //     subscriber.next(22);
    //     subscriber.complete();
    //     subscriber.next(33);
    //   } catch (error) {
    //     subscriber.error(error);
    //   }
    // })

    const foo = from([10, 20, 30, 40, 50]);

    console.log('before');

    const subscription = foo.subscribe(x => {
      console.log(x);
    });

    console.log('after');
    console.log('subscription', subscription);

    subscription.unsubscribe();


    // foo.subscribe(x => {
    //   console.log(x);
    // })

    // foo.subscribe(y => {
    //   console.log(y);
    // })
  }
}
