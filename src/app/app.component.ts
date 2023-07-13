import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'hiibii';
  data = "code step by step";
  // getValue()
  // {
  //   return "get functon data"
  // }
  getData(val: string) {
    console.warn(val)
  }
  displayVal = '';
  getValue(val: string) {
    console.warn(val)
    this.displayVal = val
  }
  count = 0
  counter(type: string) {
    type == 'add' ? this.count++ : this.count--
  }

  name = "peter"
  disable = false;

  show = "yes"
  color = "blue"
  color2 = "orangered";
  users = ['ánil', 'bhashkar', 'sam', 'peter', 'burse'];
  userDetails = [
    { name: 'Anil', email: 'anil@test.com', phone: '88888' },
    { name: 'Bhashkar', email: 'bhashkar@test.com', phone: '11111' },
    { name: 'Sam', email: 'sam@test.com', phone: '22222' },
    { name: 'peter', email: 'peter@test.com', phone: 'peter' },
  ];
  usersnested = [
    { name: 'Anil', phone: '111111', socialAccounts: ['facebook', 'insta', 'gmail'] },
    { name: 'Sam', phone: '222222', socialAccounts: ['youtube', 'insta', 'gmail'] },
    { name: 'Peter', phone: '333333', socialAccounts: ['yahoo', 'facebook', 'gmail'] },
    { name: 'bruice', phone: '444444', socialAccounts: ['linked', 'insta', 'gmail'] },
  ]

  title = 'style Binding';
  colorBinding = "red";
  bgColor = 'green';

  updateColor(){
    this.colorBinding = "blue"
    this.bgColor = "orange"
  }




}
