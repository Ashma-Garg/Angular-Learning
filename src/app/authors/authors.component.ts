import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title="List of Authors";
  authors;
  constructor(service:AuthorService) {
    this.authors=service.getAuthor();
   }

  ngOnInit(): void {
  }

}
