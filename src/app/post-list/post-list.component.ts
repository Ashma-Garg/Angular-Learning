import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { PostService } from 'src/servives/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() backendNotes;
  @Output() deletePost=new EventEmitter();
  constructor(private service: PostService) { }

  ngOnInit(){
    
  }
  deleteNote(noteId){
    this.service.deleteNote(noteId)
    .subscribe()
    this.deletePost.emit(noteId);
  }
  onBlur(content:string,id){
    console.log(content)
    for(var i=0;i<this.backendNotes.length;i++){
      if(this.backendNotes[i]["_id"]===id){
        if(this.backendNotes[i]["content"]!==content.trim()){
          var post={id:id,title:this.backendNotes[i]["title"],content: content,date:new Date}
          this.service.updateNote(post)
          .subscribe()
        }
        else{
          console.log("Nothing Changed");
        }
      }
    }
    // console.log(this.backendNotes);
  }

}
