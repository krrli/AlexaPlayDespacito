import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    var audio = new Audio('https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86');
    audio.play();
  }

  public playSong() {
    var audio = new Audio('https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86');
    audio.play();
  }
}
