import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { GamePage } from '../game/game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: Nav;

  constructor(public navCtrl: NavController, nav: Nav) {
    this.nav = nav;
  }

  public newGame() {
    this.nav.setRoot(GamePage);
  }
}
