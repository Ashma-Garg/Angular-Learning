import { Component,OnInit } from '@angular/core';
import { PostService } from 'src/servives/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title ='My Notes- Our First Project';
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
  PostDeleted(deletedPost){
    for(var i=0;i<this.addedNotes.length;i++){
      if(this.addedNotes[i]["_id"]===deletedPost){
        this.addedNotes.splice(i,1);
      }
    }
  }
  ngOnInit(){
  }
}
