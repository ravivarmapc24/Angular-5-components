import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  renderer: any;
  isHamburgerOpened = false;
  isMenuOpened = false;
  options2 = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 3, name: 'Option 4'},
    {id: 3, name: 'Option 5'}
];
options3 = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 3, name: 'Option 4'},
    {id: 3, name: 'Option 5'}
];
options4 = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 3, name: 'Option 4'},
    {id: 3, name: 'Option 5'}
];
options5 = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 3, name: 'Option 4'},
    {id: 3, name: 'Option 5'}
];
Uioptions = [
        {id: 1, name: 'User Interface'},
        {id: 2, name: 'responsive'},
        {id: 3, name: 'Layout'},
        {id: 3, name: 'Option 4'},
        {id: 3, name: 'Option 5'}
    ];
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
  toggleNavbar() {
    this.isMenuOpened = !this.isMenuOpened;
    if  ( this.isMenuOpened ) {
      document.body.className =  'modal-open';
      } else {
      document.body.className =  ' ';
      }
  }
  toggleHamburger() {
      this.isHamburgerOpened = !this.isHamburgerOpened;
  }

}
