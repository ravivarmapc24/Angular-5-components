import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isMenuOpened: boolean = false;
  title = 'app';
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `./../assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();

  }
  toggleNavbar(event) {
    this.isMenuOpened = !this.isMenuOpened;
    event.preventDefault();
  }

}
