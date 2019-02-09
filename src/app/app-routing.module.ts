import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { SectorComponent } from './components/sector/sector.component';

const routes: Routes = [
  { path: '', component: VisitorsComponent},
  { path: 'sector', component: SectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
