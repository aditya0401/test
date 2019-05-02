import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [EventDetailsComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
