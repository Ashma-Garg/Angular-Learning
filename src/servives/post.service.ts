import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getNotes(){
    return this.http.get('http://localhost:1010/notes').pipe(map(res=>res))

  }
  addnotes(notes){
    return this.http.post('http://localhost:1010/notes',notes).pipe(map(res=>res));
  }
  deleteNote(id){
    return this.http.delete('http://localhost:1010/notes/' + id).pipe(map(res=>res));
  }
  updateNote(post){
    return this.http.put('http://localhost:1010/notes/',post).pipe(map(res=>res));
  }
}
