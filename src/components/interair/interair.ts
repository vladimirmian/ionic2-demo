import { Component } from '@angular/core';

/**
 * Generated class for the InterairComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'interair',
  templateUrl: 'interair.html'
})
export class InterairComponent {

  text: string;

  constructor() {
    console.log('Hello InterairComponent Component');
    this.text = 'Hello World';
  }

}
