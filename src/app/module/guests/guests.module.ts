import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsRoutingModule } from './guests-routing.module';
import { GuestListComponent } from './guest-list/guest-list.component';

@NgModule({
  declarations: [GuestListComponent],
  imports: [
    CommonModule,
    GuestsRoutingModule
  ]
})
export class GuestsModule { }
