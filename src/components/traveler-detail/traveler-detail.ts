import { Component } from '@angular/core';

/**
 * Generated class for the TravelerDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'traveler-detail',
  templateUrl: 'traveler-detail.html'
})
export class TravelerDetailComponent {

  text: string;

  constructor() {
    console.log('Hello TravelerDetailComponent Component');
    this.text = 'Hello World';
  }

}
