import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { StationBoardComponent } from './station-board/station-board.component';
import { StationBoardPageComponent } from './station-board-page/station-board-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneySearchComponent,
    StationBoardComponent,
    StationBoardPageComponent,
    HeaderComponent
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
