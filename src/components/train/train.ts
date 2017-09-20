import { Component } from '@angular/core';

/**
 * Generated class for the TrainComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'train',
  templateUrl: 'train.html'
})
export class TrainComponent {

  text: string;

  constructor() {
    console.log('Hello TrainComponent Component');
    this.text = 'Hello World';
  }

}
