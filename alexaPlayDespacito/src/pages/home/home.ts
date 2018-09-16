import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { GamePage } from '../game/game';
import { ApiProvider } from '../../providers/api/api';
import { Game } from '../../model/game';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: Nav;
  games: Game[];

  constructor(public navCtrl: NavController, nav: Nav, public apiProvider: ApiProvider) {
    this.nav = nav;
    this.apiProvider.getGames().subscribe((data) => this.games);
  }

  public newGame() {
    this.nav.setRoot(GamePage);
  }
}
