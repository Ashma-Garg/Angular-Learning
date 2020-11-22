import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { PostService } from 'src/servives/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Output() posts=new EventEmitter();
  @Output() addedPost=new EventEmitter();
  enteredTitle='';
  enteredContent='';
  constructor(private service:PostService) {}

  AddPost(){
    const post={title:this.enteredTitle,content:this.enteredContent,date:new Date};
    this.service.addnotes(post)
    .subscribe(res=>{
      this.addedPost.emit(res);
    })  
  }

  ngOnInit(){
    var post:any;
    this.service.getNotes()
    .subscribe(res =>{
      post=res;
    })
    setTimeout(()=>{
      this.posts.emit(post);
    },1000) 
  }

}
