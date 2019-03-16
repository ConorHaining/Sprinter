import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySearchPageComponent } from './pages/journey-search-page/journey-search-page.component';
import { StationBoardPageComponent } from './pages/station-board-page/station-board-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JourneyPageComponent } from './pages/journey-page/journey-page.component';

const routes: Routes = [
  {path: '', component: JourneySearchPageComponent},
  {path: 'station/:crs/:direction', component: StationBoardPageComponent},
  {path: 'station/:crs/:direction/:year/:month/:day/:time', component: StationBoardPageComponent},
  {path: 'train/:uid/:year/:month/:day', component: JourneyPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
