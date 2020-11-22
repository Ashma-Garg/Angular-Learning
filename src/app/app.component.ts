import { Component,OnInit } from '@angular/core';
import { PostService } from 'src/servives/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title ='Hello-World- Our First Project';
  addedNotes=[];
  BackendNotes:any;
  constructor(){}

  onPostLoad(post){

    this.addedNotes=post;
    // console.log(this.addedNotes)
  }

  onPostAdd(post){
    this.addedNotes.push(post);
  }
  ngOnInit(){
  }
}
