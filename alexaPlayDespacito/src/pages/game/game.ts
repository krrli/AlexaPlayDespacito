import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MockProvider } from '../../providers/mock/mock';
import { Game } from '../../model/game';
import { HomePage } from '../home/home';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: Game;
  questionIndex = 0;
  totalPoint = 0;

  responses;
  timer;
  audio = new Audio();
  timeout;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mockProvider: MockProvider, public nav: Nav) {
    this.game = mockProvider.newGame("asdf");
    this.renderQuestion();
  }

  renderQuestion() {
    this.audio.pause();

    if (this.game.questions.length > 0) {
      let question = this.game.questions.shift(); 
      
      this.responses = question.responses;

      this.audio = new Audio(question.songUri);
      this.audio.volume = 0.0;
      this.audio.play();
      this.timeout = this.setSongTimeOut();
      this.fadeIn();
    } else {
      this.nav.setRoot(HomePage);
      //persist and redirect
    }
  }

  async fadeIn() {
    if (this.audio.volume < 0.9) {
      this.audio.volume = this.audio.volume + 0.05;
      this.sleep(100).then(() => {
        this.fadeIn()
      });
    }
  }

  async fadeOut() {
    if (this.audio.volume > 0.1) {
      this.audio.volume = this.audio.volume - 0.05;
      this.sleep(100).then(() => {
        this.fadeOut()
      });
    } else {
      this.audio.volume = 0;
    }
  }


  validate(isCorrect) {
    if (isCorrect) {
      this.totalPoint = this.totalPoint + 1;
    }

    this.audio.pause();
    clearTimeout(this.timeout);
    
    this.sleep(100).then(() => {
      this.renderQuestion();
    });

  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async setSongTimeOut() {
    this.sleep(10000).then(() => {
      this.fadeOut()
    });
    this.sleep(12500).then(() => {
      this.renderQuestion();
    });
  }
}
