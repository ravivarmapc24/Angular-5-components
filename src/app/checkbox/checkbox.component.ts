import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})


export class CheckboxComponent implements OnInit {
cities = [
        {id: 1, name: 'Option 1'},
        {id: 2, name: 'Option 2'},
        {id: 3, name: 'Option 3'},
        {id: 3, name: 'Option 4'},
        {id: 3, name: 'Option 5'}
    ];

    
    showError(control) {
      return control.invalid
    }
  constructor() { }

  ngOnInit() {
  }

}
