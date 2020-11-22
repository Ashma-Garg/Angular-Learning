import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Output() posts=new EventEmitter();
  enteredTitle='';
  enteredContent='';
  // constructor() { }
  AddPost(){
    const post={title:this.enteredTitle,content:this.enteredContent}
    this.posts.emit(post);
  }

}
