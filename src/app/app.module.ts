import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion'

import { TitleCasePi } from './titlecase.pipe';
import {SubstringPipe} from './substring.pipe';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilterTitleCaseComponent } from './filter-title-case/filter-title-case.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostTryComponent } from './post-try/post-try.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from '../servives/post.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavouriteComponent,
    FilterTitleCaseComponent,
    TitleCasePi,
    SubstringPipe,
    NewCourseFormComponent,
    PostTryComponent,
    PostsComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule
  
  ],
  providers: [
    AuthorService,
    PostService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
