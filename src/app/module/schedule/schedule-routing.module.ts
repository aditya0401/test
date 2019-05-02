import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsComponent,
  },
  {
    path: 'events',
    component: EventDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
