import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _username: any;
  constructor() {
    this._username = localStorage.getItem('username');
  }

  set username(value: string) {
    this._username = value;
    localStorage.setItem('username', value);
  }

  get username(): string {
    return this._username;
  }
}
