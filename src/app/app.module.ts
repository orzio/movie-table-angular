import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { MovieTableComponent } from './movie-table/movie-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CastListComponent,
    GenresListComponent,
    MovieTableComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
