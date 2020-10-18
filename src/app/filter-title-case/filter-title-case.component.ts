import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-title-case',
  templateUrl: './filter-title-case.component.html',
  styleUrls: ['./filter-title-case.component.css']
})
export class FilterTitleCaseComponent implements OnInit {
  val;
  constructor() { }
  onKeyUp($event){
    this.val=$event.target.value;
  }

  ngOnInit(): void {
  }

}
