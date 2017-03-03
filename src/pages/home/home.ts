import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public counter=0;
  private timer;
  private sub: Subscription;

  constructor(public navCtrl: NavController) {
    
  }

  startTimer() {

    this.timer = Observable.timer(1000,1000);
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(tick) {
    this.counter+=0.23;
  }

  stopTimer() {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
  }

}
