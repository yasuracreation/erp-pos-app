import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: any;
password: any;


  constructor() { }

  ngOnInit(): void {
  }
  onLogin() {
    throw new Error('Method not implemented.');
  }
  resetPassword(){

  }
}
