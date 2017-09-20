import { Component } from '@angular/core';

/**
 * Generated class for the TravelerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'traveler',
  templateUrl: 'traveler.html'
})
export class TravelerComponent {

  text: string;

  constructor() {
    console.log('Hello TravelerComponent Component');
    this.text = 'Hello World';
  }

}
