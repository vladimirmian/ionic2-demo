import { NavController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
@IonicPage({
    name: 'home'
})
@Component({
    selector: 'app-home-page',
    templateUrl: './home.html'
})
export class HomePageComponent {
    constructor(private nav: NavController) { }
}