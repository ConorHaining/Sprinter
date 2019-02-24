import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySearchPageComponent } from './journey-search-page/journey-search-page.component';
import { StationBoardPageComponent } from './station-board-page/station-board-page.component';

const routes: Routes = [
  {path: '', component: JourneySearchPageComponent},
  {path: 'station/:crs/:direction', component: StationBoardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
