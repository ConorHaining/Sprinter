import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneySearchComponent } from './journey-search/journey-search.component';
import { StationBoardComponent } from './station-board/station-board.component';

const routes: Routes = [
  {path: '', component: JourneySearchComponent},
  {path: 'station/:crs/:direction', component: StationBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
