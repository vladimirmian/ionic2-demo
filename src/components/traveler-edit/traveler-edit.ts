import { Component } from '@angular/core';

/**
 * Generated class for the TravelerEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'traveler-edit',
  templateUrl: 'traveler-edit.html'
})
export class TravelerEditComponent {

  text: string;

  constructor() {
    console.log('Hello TravelerEditComponent Component');
    this.text = 'Hello World';
  }

}
