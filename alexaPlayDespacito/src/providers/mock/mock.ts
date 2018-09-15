import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MockProvider Provider');
  }

  public createUser(name: String, token: String): User {
    console.log('Create User');
    let user = new User("superUser", "nasjdkfagf4iurw4hfso84hrosei74");
    return user;
  }

  newGame(userId: String): Game {

    console.log('Create Game');

    let responses = [
      new ResponseItem("Billy Jean - Michael Jackson", false),
      new ResponseItem("Take on me - A-HA", false),
      new ResponseItem("Poker Face - Lady Gaga", false),
      new ResponseItem("Chop Suey - System of a Down", true)
    ];

    let question = [new Question("http://play.spotify.com/song/2342341234", responses)];

    let game = new Game("Evil John", question)
    return game;
  }

  getAllGames(userId: String) {
    console.log('get Games');
  }

  setResponse(questionId: number, points: number) {
    console.log('set Response');
  }

  
}

