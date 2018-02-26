import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
