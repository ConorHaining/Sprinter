import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { StationBoardComponent } from './station-board/station-board.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneySearchComponent,
    StationBoardComponent
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
