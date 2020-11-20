import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilterTitleCaseComponent } from './filter-title-case/filter-title-case.component';
import { TitleCasePi } from './titlecase.pipe';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { PostTryComponent } from './post-try/post-try.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavouriteComponent,
    FilterTitleCaseComponent,
    TitleCasePi,
    NewCourseFormComponent,
    PostTryComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
