import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-try',
  templateUrl: './post-try.component.html',
  styleUrls: ['./post-try.component.css']
})
export class PostTryComponent implements OnInit {

  public hu:any;
  constructor(private http: HttpClient){
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response=>{
      // console.log(response)
      this.hu=response;
    })

  }
  additem(title: HTMLInputElement){
    let post={title:title.value}
    this.http.post('http://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
    .subscribe(response=>{
      console.log(response);
      this.hu.splice(0,0,post);
    })
  }

  ngOnInit(): void {
  }

}
