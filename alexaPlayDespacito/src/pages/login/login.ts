import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { User } from "../../model/user";
import { HomePage } from '../home/home';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name: string;
  nav: Nav;

  constructor(public navController: NavController, public navParams: NavParams, public apiProvider: ApiProvider, nav: Nav) {
    this.nav = nav;
  }

  login() {

    this.apiProvider.createUser(new User(this.name)).subscribe((data) => {
      localStorage.setItem("poppQuizUser", JSON.stringify(data));
      this.nav.setRoot(HomePage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
