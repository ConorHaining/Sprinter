import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { StationBoardPageComponent } from './station-board-page/station-board-page.component';

const routes: Routes = [
  {path: '', component: JourneySearchComponent},
  {path: 'station/:crs/:direction', component: StationBoardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
