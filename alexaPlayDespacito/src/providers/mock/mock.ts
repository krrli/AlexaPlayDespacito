import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import { Game } from '../../model/game';
import { ResponseItem } from '../../model/responseItem';
import { Question } from '../../model/question';

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
    let user = new User("superUser");
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

    let responses2 = [
      new ResponseItem("Harry Potter - Michael Jackson", false),
      new ResponseItem("asdf- A-HA", false),
      new ResponseItem("Pasdf- Lady Gaga", false),
      new ResponseItem("Cho Suey -p System of a Down", true)
    ];

    let question = [
      new Question("https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses),
      new Question("https://p.scdn.co/mp3-preview/2ddba43917fe8892fe9cecd237b6f8b55a174186?cid=774b29d4f13844c495f206cafdad9c86", responses2),
      new Question("https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses),
      new Question("https://p.scdn.co/mp3-preview/2ddba43917fe8892fe9cecd237b6f8b55a174186?cid=774b29d4f13844c495f206cafdad9c86", responses2),
      new Question("https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=774b29d4f13844c495f206cafdad9c86", responses),
    ];

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

