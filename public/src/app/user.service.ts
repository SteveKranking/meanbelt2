import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  currentUser: User = null;


  constructor(private _http: Http) { }

  getCurrentUser(){
    return this.currentUser;
  }

  createUser(newUser: User, callback) {
    this._http.post('/users', newUser).subscribe(
      res =>{
        const user = res.json();
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);

      },
      err => console.log(err)
    );
  }

  authenticate(user: User, callback) {
    this._http.post('/login', user).subscribe(
      res =>{
        const user = res.json();
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}