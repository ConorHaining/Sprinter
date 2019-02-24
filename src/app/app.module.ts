import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { StationBoardComponent } from './station-board/station-board.component';
import { StationBoardPageComponent } from './station-board-page/station-board-page.component';
import { HeaderComponent } from './header/header.component';
import { JourneySearchPageComponent } from './journey-search-page/journey-search-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneySearchComponent,
    StationBoardComponent,
    StationBoardPageComponent,
    HeaderComponent,
    JourneySearchPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
