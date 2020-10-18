import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

    isSelected:boolean;
    val="fa fa-star-o fa-lg";
    constructor(){
        this.isSelected=false;
    }

    onClick(){
        if(this.isSelected){
            this.val="fa fa-star-o fa-lg"
   
        }
        else{
            this.val="fa fa-star fa-lg"
        }
        this.isSelected=!this.isSelected;
    }


  ngOnInit(): void {
  }

}
