import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  userUrl = 'http://192.168.43.72:8000/api/users/'
  gameUrl = 'http://192.168.43.72:8000/api/games/'
  responseUrl = 'http://192.168.43.72:8000/response/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      //'Authorization': 'my-auth-token'
    })
  }

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  createUser(user: any) {
    return this.http.post<any>(this.userUrl, user, this.httpOptions)
  }

  newGame(user) {
    return this.http.post<any>(this.userUrl, user, this.httpOptions)
  }

  getGames() {
    return this.http.get<any>(this.gameUrl)
  }

  sendResponse(response) {
    return this.http.post<any>(this.responseUrl, response, this.httpOptions)
  }
}
