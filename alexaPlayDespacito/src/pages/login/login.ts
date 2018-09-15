import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MockProvider } from '../../providers/mock/mock';
import {User} from "../../model/user";
import { HomePage } from '../home/home';

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
  name:String;
  nav:Nav;

  constructor(public navController: NavController, public navParams: NavParams, public mockProvider: MockProvider, nav: Nav ) {
    this.nav = nav;
  }

  login(){
    let user:User = this.mockProvider.createUser(this.name, "asdf");
    localStorage.setItem("poppQuizUser", JSON.stringify(user));

    this.nav.setRoot(HomePage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
