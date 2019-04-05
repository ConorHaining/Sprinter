import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneySearchComponent } from './components/journey-search/journey-search.component';
import { StationBoardComponent } from './components/station-board/station-board.component';
import { StationBoardPageComponent } from './pages/station-board-page/station-board-page.component';
import { HeaderComponent } from './components/header/header.component';
import { JourneySearchPageComponent } from './pages/journey-search-page/journey-search-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { JourneyPageComponent } from './pages/journey-page/journey-page.component';
import { JourneyComponent } from './components/journey/journey.component';
import { OperatorPipe } from './pipes/operator.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    JourneySearchComponent,
    StationBoardComponent,
    StationBoardPageComponent,
    HeaderComponent,
    JourneySearchPageComponent,
    NotFoundPageComponent,
    JourneyPageComponent,
    JourneyComponent,
    OperatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
