import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MockProvider } from '../../providers/mock/mock';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public mockProvider: MockProvider ) {
  }

  login(){
    this.mockProvider.createUser(this.name, "asdf");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
