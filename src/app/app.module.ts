import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilterTitleCaseComponent } from './filter-title-case/filter-title-case.component';
import { TitleCasePi } from './titlecase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavouriteComponent,
    FilterTitleCaseComponent,
    TitleCasePi    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
